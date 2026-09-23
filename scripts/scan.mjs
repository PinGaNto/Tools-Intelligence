// Real sourcing script for THE·TEAM Tool Intelligence.
//
// Runs inside GitHub Actions. Uses Groq's free API (https://console.groq.com) to
// summarize sourced content — no credit card required, ~30 req/min & 1,000 req/day
// on the free tier, way more than this weekly scan needs. Requires a GROQ_API_KEY
// repo secret (see SCANNING_SETUP.md for how to get one and add it).
//
// (Earlier versions of this script used GitHub Models for a fully keyless setup,
// but that service was retired by GitHub on July 30, 2026, so a provider key is
// now unavoidable — Groq's free tier is the closest thing to it.)
//
// What it actually does:
//  1. Reads the current data.js (TOOLS/UPDATES/TRENDING/ISSUES) so it knows what's
//     already recorded, and can avoid re-adding the same item.
//  2. Fetches each real source URL in data/sources.json — the tools' own official
//     changelog/blog/newsroom pages, plus a handful of general AI/tech news sources.
//  3. Sends the fetched page text to a Groq chat completion, asking it to
//     pull out genuinely NEW items (since it can see what's already known) and
//     return them as strict JSON matching the site's existing schema.
//  4. Merges anything new into the data arrays and rewrites data.js.
//  5. The workflow (scan.yml) commits the result if anything changed.
//
// Known limitation: ISSUES (complaints/problems) are NOT sourced here. Reliable
// complaint sources (G2, BBB, Reddit, etc.) are JS-heavy/bot-resistant and a plain
// fetch() usually won't get real content back. Wiring that up properly needs a
// real search/scraping API. Issues stays manually curated until then — see README.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_PATH = path.join(ROOT, 'data.js');
const SOURCES_PATH = path.join(ROOT, 'data', 'sources.json');

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const MODEL = process.env.SCAN_MODEL || 'openai/gpt-oss-120b';
const MODELS_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';

if (!GROQ_API_KEY) {
  console.error('GROQ_API_KEY is not set. Add it as a repo secret (see SCANNING_SETUP.md) — get a free key at https://console.groq.com/keys');
  process.exit(1);
}

// ---------- load existing data.js ----------
function loadData() {
  const src = readFileSync(DATA_PATH, 'utf8');
  const sandbox = {};
  // data.js just declares `const TOOLS = [...]` etc with no exports, so eval it
  // in a sandbox and pull the bindings back out.
  vm.createContext(sandbox);
  vm.runInContext(src + '\nthis.__out = { TOOLS, UPDATES, TRENDING, ISSUES, TRENDING_REFRESHED_AT, ISSUES_REFRESHED_AT };', sandbox);
  return sandbox.__out;
}

function serializeData(d) {
  const stamp = (name, value) => `const ${name} = ${JSON.stringify(value, null, 2)};`;
  return [
    stamp('TOOLS', d.TOOLS),
    '',
    stamp('UPDATES', d.UPDATES),
    '',
    `const TRENDING_REFRESHED_AT = ${JSON.stringify(d.TRENDING_REFRESHED_AT)}; // updated by scripts/scan.mjs`,
    stamp('TRENDING', d.TRENDING),
    '',
    `const ISSUES_REFRESHED_AT = ${JSON.stringify(d.ISSUES_REFRESHED_AT)}; // manually curated — see README`,
    stamp('ISSUES', d.ISSUES),
    '',
    `const SCAN_META = ${JSON.stringify({
      lastRun: new Date().toISOString(),
      runType: process.env.SCAN_RUN_TYPE || 'Automatic (weekly)',
    }, null, 2)};`,
    ''
  ].join('\n');
}

// ---------- fetch + strip a source page down to plain text ----------
async function fetchPageText(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TeamToolIntelligenceBot/1.0)' } });
    if (!res.ok) {
      console.warn(`  ! ${url} -> HTTP ${res.status}`);
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
    if (text.length < 200) {
      console.warn(`  ! ${url} -> extracted text too short (${text.length} chars), likely JS-rendered. Skipping.`);
      return null;
    }
    return text.slice(0, 4000); // keep prompts small — free tier TPM budget is tight
  } catch (err) {
    console.warn(`  ! ${url} -> fetch failed: ${err.message}`);
    return null;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ---------- call Groq (OpenAI-compatible) ----------
async function callModel(system, user, attempt = 1) {
  const res = await fetch(MODELS_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      temperature: 0.2,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
    }),
  });
  console.log(`  [debug] requested ${MODELS_ENDPOINT} (model=${MODEL}) -> status: ${res.status}`);
  const rawText = await res.text();

  if (res.status === 429 && attempt <= 4) {
    const retryAfter = Number(res.headers.get('retry-after')) || 5;
    console.warn(`  ! rate limited, waiting ${retryAfter}s before retry (attempt ${attempt}/4)`);
    await sleep((retryAfter + 1) * 1000);
    return callModel(system, user, attempt + 1);
  }

  if (!res.ok) {
    const headerDump = [...res.headers.entries()].map(([k, v]) => `${k}: ${v}`).join('\n');
    throw new Error(`Groq request failed: HTTP ${res.status}\nHeaders:\n${headerDump}\nBody:\n${rawText.slice(0, 1000)}`);
  }
  let json;
  try {
    json = JSON.parse(rawText);
  } catch {
    const headerDump = [...res.headers.entries()].map(([k, v]) => `${k}: ${v}`).join('\n');
    throw new Error(`Groq returned a non-JSON response (HTTP ${res.status}):\nHeaders:\n${headerDump}\nBody:\n${rawText.slice(0, 1000)}`);
  }
  return json.choices?.[0]?.message?.content ?? '';
}

function extractJson(text) {
  const match = text.match(/\[[\s\S]*\]/); // first JSON array in the response
  if (!match) return [];
  try {
    return JSON.parse(match[0]);
  } catch {
    return [];
  }
}

// ---------- per-tool update extraction ----------
async function scanToolUpdates(tool, url, data) {
  const pageText = await fetchPageText(url);
  if (!pageText) return [];

  const knownForTool = data.UPDATES
    .filter(u => u.tool === tool.name)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 8)
    .map(u => `- ${u.date}: ${u.title}`)
    .join('\n') || '(none recorded yet)';

  const system = `You are a research analyst for THE·TEAM, extracting genuinely NEW product updates for one monitored tool from its own official page. Only report items that represent real, dated announcements visible in the page text. If you cannot find any clearly new dated item beyond what's already known, return an empty array. Never invent a date, url, or fact not present in the page text. Output ONLY a JSON array, no prose.`;

  const user = `Tool: ${tool.name}
Category: ${tool.category}
Source page URL: ${url}

Already known recent updates for this tool (do NOT repeat these):
${knownForTool}

Raw page text (may include navigation/boilerplate noise, ignore that):
"""
${pageText}
"""

Return a JSON array of NEW items only, each with this exact shape:
{
  "date": "YYYY-MM-DD",
  "title": "short headline",
  "summary": "1-2 sentence factual summary of what changed, grounded only in the page text",
  "impact": "1 sentence on why this could matter to a media/marketing analytics team",
  "overlap": ["1-3 short capability tags"],
  "confidence": "High" | "Medium" | "Low",
  "priority": "High" | "Medium" | "Low",
  "source": "${url}",
  "sourceType": "Official source",
  "reliability": "Reliable"
}
If nothing new, return [].`;

  const content = await callModel(system, user);
  return extractJson(content);
}

// ---------- general trending extraction ----------
async function scanTrendingSource(source, existingNames) {
  const pageText = await fetchPageText(source.url);
  if (!pageText) return [];

  const system = `You are a research analyst tracking notable AI/social/productivity tool news for THE·TEAM. Extract only real, dated items visible in the page text. Never invent facts. Output ONLY a JSON array, no prose.`;
  const user = `Source: ${source.name} (${source.url})

Already known trending items (do NOT repeat these by name):
${existingNames.join(', ') || '(none)'}

Raw page text:
"""
${pageText}
"""

Return a JSON array of newsworthy items from the last ~30 days found in this text, each shaped like:
{
  "name": "short name of the release/announcement",
  "category": "AI" | "Productivity" | "Social",
  "date": "YYYY-MM-DD",
  "summary": "1-2 sentence factual summary",
  "source": "${source.url}",
  "sourceType": "${source.name}",
  "reliability": "Reliable"
}
If nothing relevant, return [].`;

  const content = await callModel(system, user);
  return extractJson(content);
}

// ---------- main ----------
async function main() {
  const data = loadData();
  const sources = JSON.parse(readFileSync(SOURCES_PATH, 'utf8'));

  let nextId = Math.max(0, ...data.UPDATES.map(u => u.id)) + 1;
  const newUpdates = [];

  console.log('Scanning per-tool sources for updates...');
  for (const s of sources.toolSources) {
    const tool = data.TOOLS.find(t => t.name === s.tool);
    if (!tool) {
      console.warn(`  ! ${s.tool} not found in TOOLS, skipping`);
      continue;
    }
    console.log(` - ${s.tool} (${s.url})${s.verify ? '  [unverified source URL]' : ''}`);
    const items = await scanToolUpdates(tool, s.url, data);
    for (const item of items) {
      newUpdates.push({ id: nextId++, tool: tool.name, category: tool.category, ...item });
    }
    await sleep(1500);
  }

  console.log(`Found ${newUpdates.length} new update(s).`);
  data.UPDATES.push(...newUpdates);

  console.log('Scanning general sources for trending items...');
  const existingNames = data.TRENDING.map(t => t.name);
  const newTrending = [];
  for (const s of sources.trendingSources) {
    console.log(` - ${s.name} (${s.url})`);
    const items = await scanTrendingSource(s, existingNames);
    newTrending.push(...items);
    await sleep(1500);
  }
  console.log(`Found ${newTrending.length} new trending item(s).`);

  // Merge, re-rank by date (newest first), keep top 15 to feed the site's own 4-week/top-10 filtering.
  const merged = [...newTrending.map(t => ({ ...t })), ...data.TRENDING.map(t => ({ name: t.name, category: t.category, date: t.date, summary: t.summary, source: t.source, sourceType: t.sourceType, reliability: t.reliability }))];
  const deduped = [];
  const seen = new Set();
  for (const t of merged.sort((a, b) => b.date.localeCompare(a.date))) {
    if (seen.has(t.name)) continue;
    seen.add(t.name);
    deduped.push(t);
  }
  deduped.slice(0, 15).forEach((t, i) => { t.rank = i + 1; });
  data.TRENDING = deduped.slice(0, 15);
  data.TRENDING_REFRESHED_AT = new Date().toISOString().slice(0, 10);

  // ISSUES intentionally untouched — see file header comment and README.

  writeFileSync(DATA_PATH, serializeData(data));
  console.log('data.js rewritten.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
