// Inbox script for THE·TEAM Tool Intelligence.
//
// Reads public submissions from a Google Form (no login required to submit —
// see INBOX_SETUP.md for how the form is set up and why this approach needs no
// backend of our own). For each new submission:
//   1. If the submission contains a link, fetches that page directly (same
//      approach as scripts/scan.mjs). If it contains no link — just a text
//      description — searches the web via Tavily (free, no card required)
//      using the submitted text, and uses whatever real pages that search
//      turns up as the corroborating source instead.
//   2. Sends the resulting source content + the submitter's own note to Groq,
//      and asks it to either produce a properly formatted Updates-page entry
//      grounded in real source content, or reject the submission (spam,
//      unrelated, unsubstantiated, or — for text-only submissions — nothing
//      findable on the web that corroborates the claim).
//   3. Checks the submitter's typed name against data/team.json. Only an EXACT
//      (case-insensitive) match gets the "team member" badge + first name shown
//      on the site — anyone else shows up as an anonymous "Community submission"
//      rather than displaying whatever name they typed, since we have no way to
//      verify identity and don't want to display unverified names as fact (that
//      would also let someone type a real teammate's name to impersonate them —
//      this is a best-effort convenience signal, not an identity/auth control).
//   4. Every inbox-sourced item gets reliability:'Flagged' regardless of who
//      submitted it, so it lands in "Needs Review" by default — a human still
//      glances at it before it's treated as confirmed, same as any other
//      unofficial source on this site.
//
// Submissions are tracked by their form Timestamp in INBOX_PROCESSED, so a
// rejected or already-handled row is never reprocessed on the next run.
//
// TAVILY_API_KEY is optional. Without it, text-only (no-link) submissions just
// get rejected automatically like before — nothing breaks, you just lose the
// "search for it" behavior for that case. Linked submissions work either way.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_PATH = path.join(ROOT, 'data.js');
const TEAM_PATH = path.join(ROOT, 'data', 'team.json');
const CONFIG_PATH = path.join(ROOT, 'data', 'inbox-config.json');

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const MODEL = process.env.SCAN_MODEL || 'openai/gpt-oss-120b';
const MODELS_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const TAVILY_API_KEY = process.env.TAVILY_API_KEY || '';
const TAVILY_ENDPOINT = 'https://api.tavily.com/search';

if (!GROQ_API_KEY) {
  console.error('GROQ_API_KEY is not set. Add it as a repo secret — see SCANNING_SETUP.md.');
  process.exit(1);
}
if (!TAVILY_API_KEY) {
  console.log('Note: TAVILY_API_KEY is not set. Text-only submissions (no link) will be rejected automatically instead of searched for. See INBOX_SETUP.md to enable this — it is free, no card required.');
}

// ---------- load / save data.js (round-trips every field, touches only UPDATES + INBOX_*) ----------
function loadData() {
  const src = readFileSync(DATA_PATH, 'utf8');
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(
    src + '\nthis.__out = { TOOLS, UPDATES, TRENDING, ISSUES, TRENDING_REFRESHED_AT, ISSUES_REFRESHED_AT, SCAN_META: (typeof SCAN_META!=="undefined"?SCAN_META:{lastRun:null,runType:null}), INBOX_PROCESSED: (typeof INBOX_PROCESSED!=="undefined"?INBOX_PROCESSED:[]), NOTIFICATIONS: (typeof NOTIFICATIONS!=="undefined"?NOTIFICATIONS:[]) };',
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
    `const SCAN_META = ${JSON.stringify(d.SCAN_META, null, 2)}; // written by scripts/scan.mjs — untouched here`,
    '',
    `const INBOX_PROCESSED = ${JSON.stringify(d.INBOX_PROCESSED)}; // written by scripts/inbox.mjs — do not edit by hand`,
    `const INBOX_META = ${JSON.stringify({ lastRun: new Date().toISOString() }, null, 2)};`,
    '',
    `const NOTIFICATIONS = ${JSON.stringify(d.NOTIFICATIONS, null, 2)}; // written by scripts/scan.mjs and scripts/inbox.mjs — do not edit by hand`,
    ''
  ].join('\n');
}

// ---------- fetch + strip a source page down to plain text (same approach as scan.mjs) ----------
async function fetchPageText(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36' } });
    if (!res.ok) {
      console.warn(`  ! source link -> HTTP ${res.status}`);
      return null;
    }
    const html = await res.text();
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (text.length < 100) return null;
    return text.slice(0, 4000);
  } catch (err) {
    console.warn(`  ! source link fetch failed: ${err.message}`);
    return null;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ---------- call Groq (same retry-on-429 behavior as scan.mjs) ----------
async function callModel(system, user, attempt = 1) {
  const res = await fetch(MODELS_ENDPOINT, {
    method: 'POST',
    headers: { Authorization: `Bearer ${GROQ_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: MODEL,
      temperature: 0.2,
      messages: [{ role: 'system', content: system }, { role: 'user', content: user }],
    }),
  });
  const rawText = await res.text();

  if (res.status === 429 && attempt <= 4) {
    const retryAfter = Number(res.headers.get('retry-after')) || 5;
    console.warn(`  ! rate limited, waiting ${retryAfter}s (attempt ${attempt}/4)`);
    await sleep((retryAfter + 1) * 1000);
    return callModel(system, user, attempt + 1);
  }
  if (!res.ok) {
    throw new Error(`Groq request failed: HTTP ${res.status}\n${rawText.slice(0, 1000)}`);
  }
  let json;
  try {
    json = JSON.parse(rawText);
  } catch {
    throw new Error(`Groq returned non-JSON (HTTP ${res.status}): ${rawText.slice(0, 1000)}`);
  }
  return json.choices?.[0]?.message?.content ?? '';
}

function extractJsonObject(text) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try {
    return JSON.parse(match[0]);
  } catch {
    return null;
  }
}

// ---------- minimal CSV parser (handles quoted fields, embedded commas/newlines, "" escaping) ----------
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\n') {
      row.push(field); field = ''; rows.push(row); row = [];
    } else if (c === '\r') {
      // skip, \n handles the row break
    } else {
      field += c;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows.filter(r => r.some(cell => cell.trim().length));
}

// ---------- validate + format one submission via Groq, grounded in its source page ----------
async function processSubmission({ name, tool, sourceLink, notes }, data) {
  const pageText = await fetchPageText(sourceLink);

  const system = `You are a strict fact-checking research analyst for THE·TEAM. You receive a public, unauthenticated submission claiming a tool update/news item, plus (when available) the actual text of the source page the submitter linked. Your job: decide whether this is a real, substantiated, relevant tool/AI/productivity/social-tool update — and if so, produce a clean structured record. REJECT (return {"reject": true, "reason": "..."}) if: the submission is spam, promotional junk, unrelated to tools/software, or the fetched source page (when present) does not actually support the claim. If the source page could not be fetched, do not auto-reject just for that (fetches sometimes get bot-blocked even for real pages) — instead accept cautiously based on the submitter's note if it reads as a plausible, specific, genuine claim, and note the lack of verification in your summary. Never invent facts beyond what's given. Output ONLY one JSON object, no prose.`;

  const user = `Submitted by: ${name || '(not given)'}
Claimed tool: ${tool || '(not given)'}
Source link: ${sourceLink}
Submitter's note: ${notes || '(none)'}

${pageText ? `Fetched source page text:\n"""\n${pageText}\n"""` : '(Source link could not be fetched automatically — could be a real page blocking bots, or a dead/wrong link. Use judgment.)'}

Known monitored tools at THE·TEAM: ${data.TOOLS.map(t => t.name).join(', ')}

Respond with exactly one JSON object. Either:
{"reject": true, "reason": "short reason"}
or:
{
  "reject": false,
  "tool": "tool name (match one of the known monitored tools if this clearly is one, otherwise the name as given)",
  "category": "short category label, e.g. AI / Social Listening / Productivity / SEO / Search / etc",
  "date": "YYYY-MM-DD — the date of the actual update if determinable from the source, otherwise today's date",
  "title": "short factual headline",
  "summary": "1-2 sentence factual summary grounded in the source (or submitter's note if source unavailable)",
  "impact": "1 sentence on why this could matter to a media/marketing analytics team",
  "overlap": ["1-3 short capability tags"],
  "confidence": "High" | "Medium" | "Low",
  "priority": "High" | "Medium" | "Low"
}`;

  const content = await callModel(system, user);
  return extractJsonObject(content);
}

// ---------- search the web via Tavily for a text-only submission ----------
async function tavilySearch(query) {
  try {
    const res = await fetch(TAVILY_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TAVILY_API_KEY}` },
      body: JSON.stringify({ query, max_results: 4, search_depth: 'basic' }),
    });
    if (!res.ok) {
      console.warn(`  ! Tavily search failed: HTTP ${res.status}`);
      return [];
    }
    const json = await res.json();
    return Array.isArray(json.results) ? json.results : [];
  } catch (err) {
    console.warn(`  ! Tavily search error: ${err.message}`);
    return [];
  }
}

// ---------- validate + format a text-only submission, grounded in web search results ----------
async function processSubmissionFromSearch({ name, notes, results }, data) {
  const sourcesBlock = results
    .slice(0, 4)
    .map((r, i) => `[${i}] ${r.title}\nURL: ${r.url}\nContent: ${(r.content || '').slice(0, 800)}`)
    .join('\n\n');

  const system = `You are a strict fact-checking research analyst for THE·TEAM. A public submitter described a tool update/news item in their own words, with no link. You've been given web search results that might corroborate it. Your job: decide whether any of these search results actually substantiate the submitter's claim about a real, specific, relevant tool/AI/productivity/social-tool update — and if so, produce a clean structured record grounded in that one best-matching result. REJECT (return {"reject": true, "reason": "..."}) if none of the results actually corroborate the specific claim, or if the claim is vague/spam/unrelated to tools. Never invent facts beyond what the matched search result actually says. Output ONLY one JSON object, no prose.`;

  const user = `Submitted by: ${name || '(not given)'}
Submitter's description (no link given): ${notes}

Known monitored tools at THE·TEAM: ${data.TOOLS.map(t => t.name).join(', ')}

Web search results found for this claim:
${sourcesBlock || '(no results)'}

Respond with exactly one JSON object. Either:
{"reject": true, "reason": "short reason"}
or:
{
  "reject": false,
  "matchedIndex": 0,
  "tool": "tool name (match one of the known monitored tools if this clearly is one, otherwise the name as given)",
  "category": "short category label, e.g. AI / Social Listening / Productivity / SEO / Search / etc",
  "date": "YYYY-MM-DD — the date of the actual update if determinable, otherwise today's date",
  "title": "short factual headline",
  "summary": "1-2 sentence factual summary grounded in the matched search result",
  "impact": "1 sentence on why this could matter to a media/marketing analytics team",
  "overlap": ["1-3 short capability tags"],
  "confidence": "High" | "Medium" | "Low",
  "priority": "High" | "Medium" | "Low"
}
"matchedIndex" must be the [N] index of the search result you grounded this in.`;

  const content = await callModel(system, user);
  const parsed = extractJsonObject(content);
  if (!parsed || parsed.reject) return parsed;
  const matched = results[parsed.matchedIndex];
  if (!matched) return { reject: true, reason: 'model did not point to a valid search result' };
  return { ...parsed, sourceLink: matched.url };
}
function matchTeamMember(rawName, roster) {
  if (!rawName) return null;
  const norm = rawName.trim().toLowerCase();
  const found = roster.find(full => full.trim().toLowerCase() === norm);
  if (!found) return null;
  return found.trim().split(/\s+/)[0]; // first name
}

// ---------- notifications: last 14 days, most recent 50, newest first ----------
function pruneNotifications(notifs) {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 14);
  return notifs
    .filter(n => new Date(n.date) >= cutoff)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 50);
}

// ---------- main ----------
async function main() {
  if (!existsSync(CONFIG_PATH)) {
    console.error(`Missing ${CONFIG_PATH}. Create it with {"csvUrl": "https://docs.google.com/.../pub?output=csv"} — see INBOX_SETUP.md.`);
    process.exit(1);
  }
  const config = JSON.parse(readFileSync(CONFIG_PATH, 'utf8'));
  if (!config.csvUrl || config.csvUrl.includes('REPLACE_ME')) {
    console.log('inbox-config.json csvUrl is not set up yet — nothing to do. See INBOX_SETUP.md.');
    return;
  }

  const roster = existsSync(TEAM_PATH) ? JSON.parse(readFileSync(TEAM_PATH, 'utf8')) : [];
  const data = loadData();
  data.INBOX_PROCESSED = data.INBOX_PROCESSED || [];
  const processedSet = new Set(data.INBOX_PROCESSED);

  console.log(`Fetching submissions from ${config.csvUrl}`);
  const csvRes = await fetch(config.csvUrl);
  if (!csvRes.ok) {
    console.error(`Failed to fetch submissions CSV: HTTP ${csvRes.status}`);
    process.exit(1);
  }
  const csvText = await csvRes.text();
  const rows = parseCsv(csvText);
  if (!rows.length) {
    console.log('No rows in the submissions sheet.');
    writeFileSync(DATA_PATH, serializeData(data));
    return;
  }

  const header = rows[0];
  const dataRows = rows.slice(1);
  console.log(`Found ${dataRows.length} total submission(s), ${processedSet.size} already processed.`);

  // Expected column order from the Google Form (see INBOX_SETUP.md):
  // 0 Timestamp | 1 Who are you? | 2 What update/News would you like to submit?
  // Column 2 is one free-text field — people paste a link, sometimes with extra
  // context around it — so we pull the first URL out of it with a regex rather
  // than expecting a dedicated "source link" column.
  let nextId = Math.max(0, ...data.UPDATES.map(u => u.id)) + 1;
  let accepted = 0, rejected = 0, skipped = 0;
  const newNotifications = [];

  for (const row of dataRows) {
    const timestamp = (row[0] || '').trim();
    if (!timestamp || processedSet.has(timestamp)) { skipped++; continue; }

    const name = (row[1] || '').trim();
    const rawSubmission = (row[2] || '').trim();
    const urlMatch = rawSubmission.match(/https?:\/\/[^\s]+/i);
    const sourceLink = urlMatch ? urlMatch[0].replace(/[)\]"'.,]+$/, '') : ''; // trim trailing punctuation a sentence might leave attached
    const notes = rawSubmission;
    const tool = ''; // no dedicated tool field on this form — the model infers it from the link/notes

    processedSet.add(timestamp); // mark handled regardless of outcome, so we never retry it

    console.log(` - [${timestamp}] "${tool || '(no tool given)'}" from "${name || 'anonymous'}" (${sourceLink || 'no link — will search'})`);
    let result;
    try {
      if (sourceLink) {
        result = await processSubmission({ name, tool, sourceLink, notes }, data);
      } else if (TAVILY_API_KEY) {
        const query = notes.slice(0, 400);
        const searchResults = await tavilySearch(query);
        if (!searchResults.length) {
          console.log(`  ✗ [${timestamp}] no link given, and web search found nothing relevant — rejected`);
          rejected++;
          await sleep(1000);
          continue;
        }
        result = await processSubmissionFromSearch({ name, notes, results: searchResults }, data);
      } else {
        console.log(`  ✗ [${timestamp}] no link given, and TAVILY_API_KEY not set — rejected automatically`);
        rejected++;
        continue;
      }
    } catch (err) {
      console.warn(`  ! model call failed, skipping this run (will retry next time): ${err.message}`);
      processedSet.delete(timestamp); // don't mark as processed — genuinely want to retry a transient failure
      await sleep(2000);
      continue;
    }

    if (!result || result.reject) {
      console.log(`  ✗ rejected: ${result?.reason || 'no structured response'}`);
      rejected++;
      await sleep(2000);
      continue;
    }
    const resolvedSourceLink = result.sourceLink || sourceLink;

    const firstName = matchTeamMember(name, roster);
    const foundViaSearch = !sourceLink;
    const item = {
      id: nextId++,
      tool: result.tool || tool || 'Unknown',
      category: result.category || 'Other',
      date: result.date || new Date().toISOString().slice(0, 10),
      title: result.title,
      summary: result.summary,
      impact: result.impact,
      overlap: Array.isArray(result.overlap) ? result.overlap : [],
      confidence: result.confidence || 'Low',
      priority: result.priority || 'Low',
      source: resolvedSourceLink,
      sourceType: firstName ? 'Team inbox submission' : 'Community inbox submission',
      reliability: 'Flagged', // inbox items always default to Needs Review — see file header comment
      reliabilityNote: `Submitted via the tools inbox${firstName ? ` by ${firstName} (team)` : ''}${foundViaSearch ? ' — no link was given; this source was found via web search based on the submitted description' : ''}. Verify against the source link before treating as confirmed.`,
      submitted: { isTeam: !!firstName, firstName: firstName || null },
    };
    data.UPDATES.push(item);
    accepted++;
    newNotifications.push({
      id: `upd-${item.id}`,
      date: new Date().toISOString(),
      type: 'update',
      text: `${item.tool}: ${item.title}${firstName ? ` (submitted by ${firstName})` : ' (community submission)'}`,
      target: { page: 'updates', id: item.id },
      source: 'inbox',
    });
    console.log(`  ✓ accepted as Update #${item.id}${firstName ? ` (team: ${firstName})` : ' (community)'}${foundViaSearch ? ' [source found via search]' : ''}`);
    await sleep(2000);
  }

  data.INBOX_PROCESSED = [...processedSet];
  data.NOTIFICATIONS = pruneNotifications([...(data.NOTIFICATIONS || []), ...newNotifications]);
  console.log(`Done. Accepted ${accepted}, rejected ${rejected}, already-processed/skipped ${skipped}.`);

  writeFileSync(DATA_PATH, serializeData(data));
  console.log('data.js rewritten.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
