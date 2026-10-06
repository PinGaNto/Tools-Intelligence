// One-time (or run-whenever) backlog audit for THE·TEAM Tool Intelligence.
//
// scan.mjs and inbox.mjs only judge NEW items as they're found — they never
// look back at what's already on the dashboard. This script does that: it
// re-judges every existing UPDATES/TRENDING/ISSUES item against the same
// strict "one concrete named feature release, not a newsletter/roundup/
// opinion piece" bar used elsewhere, and REMOVES anything that fails.
//
// This is destructive (items get deleted from data.js), with no review step
// by design. It's manual-trigger-only (see .github/workflows/audit.yml) — it
// does not run on a schedule. Since data.js is committed to git, a bad call
// is always recoverable with `git revert`.
//
// Where possible it re-fetches the item's own source link for fresh grounding
// text, same as scan.mjs. If that fetch fails (dead link, bot-blocked, etc.)
// it falls back to judging from the item's own stored title/summary — not
// ideal, but consistent with how the rest of this pipeline handles fetch
// failures rather than treating them as automatic rejections.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_PATH = path.join(ROOT, 'data.js');

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const MODEL = process.env.SCAN_MODEL || 'openai/gpt-oss-120b';
const MODELS_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';

if (!GROQ_API_KEY) {
  console.error('GROQ_API_KEY is not set. Add it as a repo secret — see SCANNING_SETUP.md.');
  process.exit(1);
}

function loadData() {
  const src = readFileSync(DATA_PATH, 'utf8');
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(
    src + '\nthis.__out = { TOOLS, UPDATES, TRENDING, ISSUES, TRENDING_REFRESHED_AT, ISSUES_REFRESHED_AT, SCAN_META: (typeof SCAN_META!=="undefined"?SCAN_META:{lastRun:null,runType:null}), INBOX_PROCESSED: (typeof INBOX_PROCESSED!=="undefined"?INBOX_PROCESSED:[]), INBOX_META: (typeof INBOX_META!=="undefined"?INBOX_META:{lastRun:null}), NOTIFICATIONS: (typeof NOTIFICATIONS!=="undefined"?NOTIFICATIONS:[]) };',
    sandbox
  );
  return sandbox.__out;
}

function serializeData(d) {
  const stamp = (name, value) => `const ${name} = ${JSON.stringify(value, null, 2)};`;
  return [
    stamp('TOOLS', d.TOOLS),
    '',
    stamp('UPDATES', d.UPDATES),
    '',
    `const TRENDING_REFRESHED_AT = ${JSON.stringify(d.TRENDING_REFRESHED_AT)};`,
    stamp('TRENDING', d.TRENDING),
    '',
    `const ISSUES_REFRESHED_AT = ${JSON.stringify(d.ISSUES_REFRESHED_AT)};`,
    stamp('ISSUES', d.ISSUES),
    '',
    `const SCAN_META = ${JSON.stringify(d.SCAN_META, null, 2)};`,
    '',
    `const INBOX_PROCESSED = ${JSON.stringify(d.INBOX_PROCESSED)};`,
    `const INBOX_META = ${JSON.stringify(d.INBOX_META, null, 2)};`,
    '',
    `const NOTIFICATIONS = ${JSON.stringify(d.NOTIFICATIONS, null, 2)};`,
    ''
  ].join('\n');
}

async function fetchPageText(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36' } });
    if (!res.ok) return null;
    const html = await res.text();
    const text = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
    if (text.length < 200) return null;
    return text.slice(0, 3000);
  } catch {
    return null;
  }
}

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function callModel(system, user, attempt = 1) {
  const res = await fetch(MODELS_ENDPOINT, {
    method: 'POST',
    headers: { Authorization: `Bearer ${GROQ_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: MODEL, temperature: 0.1, messages: [{ role: 'system', content: system }, { role: 'user', content: user }] }),
  });
  const rawText = await res.text();
  if (res.status === 429 && attempt <= 4) {
    const retryAfter = Number(res.headers.get('retry-after')) || 5;
    console.warn(`  ! rate limited, waiting ${retryAfter}s (attempt ${attempt}/4)`);
    await sleep((retryAfter + 1) * 1000);
    return callModel(system, user, attempt + 1);
  }
  if (!res.ok) throw new Error(`Groq request failed: HTTP ${res.status}\n${rawText.slice(0, 500)}`);
  let json;
  try { json = JSON.parse(rawText); } catch { throw new Error(`Groq returned non-JSON: ${rawText.slice(0, 500)}`); }
  return json.choices?.[0]?.message?.content ?? '';
}

function extractJsonObject(text) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try { return JSON.parse(match[0]); } catch { return null; }
}

const AUDIT_SYSTEM = `You are auditing already-published items on THE·TEAM's tool intelligence dashboard against a strict editorial bar.

KEEP an item only if it describes ONE specific, concrete, named feature, capability, incident, or complaint that was actually released, changed, or happened — with enough detail that you could explain exactly what it was.

REMOVE an item if:
- It reads like it came from a newsletter/digest/roundup that bundles multiple unrelated things
- It's a general opinion/analysis/"state of the industry" piece with no single concrete release or incident
- It's a listicle ("best tools for X")
- It's vague marketing copy or a teaser with no concrete detail about what actually changed
- The summary given doesn't actually describe a specific, real, dated event — just a general mention of the tool

When in doubt between a borderline-concrete item and a clearly vague one, lean toward KEEP for the borderline case — this audit is meant to catch clear newsletter/roundup/opinion-piece contamination, not to second-guess every reasonably specific item.

Output ONLY one JSON object: {"keep": true, "reason": "short reason"} or {"keep": false, "reason": "short reason"}`;

async function auditItem(label, summaryText, sourceUrl) {
  const pageText = sourceUrl ? await fetchPageText(sourceUrl) : null;
  const user = `Item: ${label}
Stored summary: ${summaryText}
Source URL: ${sourceUrl || '(none)'}

${pageText ? `Freshly re-fetched source page text:\n"""\n${pageText}\n"""` : '(Source could not be re-fetched — judge based on the stored summary alone.)'}`;
  const content = await callModel(AUDIT_SYSTEM, user);
  const result = extractJsonObject(content);
  return result || { keep: true, reason: 'could not parse audit response — kept by default to avoid false deletion' };
}

async function main() {
  const data = loadData();
  const removed = { updates: [], trending: [], issues: [] };

  console.log(`Auditing ${data.UPDATES.length} update(s)...`);
  const keptUpdates = [];
  for (const u of data.UPDATES) {
    const verdict = await auditItem(`${u.tool}: ${u.title}`, u.summary, u.source);
    if (verdict.keep) {
      keptUpdates.push(u);
    } else {
      removed.updates.push({ id: u.id, tool: u.tool, title: u.title, reason: verdict.reason });
      console.log(`  ✗ removing Update #${u.id} "${u.tool}: ${u.title}" — ${verdict.reason}`);
    }
    await sleep(1500);
  }
  data.UPDATES = keptUpdates;

  console.log(`Auditing ${data.TRENDING.length} trending item(s)...`);
  const keptTrending = [];
  for (const t of data.TRENDING) {
    const verdict = await auditItem(t.name, t.summary, t.source);
    if (verdict.keep) {
      keptTrending.push(t);
    } else {
      removed.trending.push({ name: t.name, reason: verdict.reason });
      console.log(`  ✗ removing Trending "${t.name}" — ${verdict.reason}`);
    }
    await sleep(1500);
  }
  data.TRENDING = keptTrending.map((t, i) => ({ ...t, rank: i + 1 }));

  console.log(`Auditing ${data.ISSUES.length} issue item(s)...`);
  const keptIssues = [];
  for (const i of data.ISSUES) {
    const verdict = await auditItem(`${i.tool}: ${i.title}`, i.summary, i.source);
    if (verdict.keep) {
      keptIssues.push(i);
    } else {
      removed.issues.push({ tool: i.tool, title: i.title, reason: verdict.reason });
      console.log(`  ✗ removing Issue "${i.tool}: ${i.title}" — ${verdict.reason}`);
    }
    await sleep(1500);
  }
  data.ISSUES = keptIssues.map((it, idx) => ({ ...it, rank: idx + 1 }));

  const totalRemoved = removed.updates.length + removed.trending.length + removed.issues.length;
  console.log(`\nDone. Removed ${totalRemoved} item(s): ${removed.updates.length} update(s), ${removed.trending.length} trending, ${removed.issues.length} issue(s).`);
  if (totalRemoved) {
    console.log('Full removal list (for the record):');
    console.log(JSON.stringify(removed, null, 2));
  }

  writeFileSync(DATA_PATH, serializeData(data));
  console.log('data.js rewritten.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
