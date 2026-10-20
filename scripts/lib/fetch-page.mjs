// Shared page-fetching helper for scan.mjs, inbox.mjs, and audit.mjs.
//
// Two-tier approach:
//   1. Plain HTTP fetch first — fast, works for the majority of ordinary
//      server-rendered pages (most of what we've been using so far).
//   2. If that returns nothing usable, fall back to a real headless Chrome
//      (Playwright) — slower and heavier, but can render JavaScript-built
//      pages and gets past basic bot-detection that flatly rejects
//      non-browser requests (missing headers, no real browser fingerprint).
//
// Honest limit: this is NOT a bypass for serious bot protection. A
// Cloudflare "managed challenge" or a CAPTCHA wall will still block a
// headless browser the same as it blocks any other automated visitor —
// openai.com/news fell into this category when we hit it earlier and
// probably still will. What this DOES fix is the much more common case: a
// page that simply renders its real content client-side with JavaScript,
// which plain fetch() can never see at all, blocked or not. Several sources
// that returned "too short / likely JS-rendered" earlier in this project
// (VwD, Sprinklr, Siftsy) are exactly this case.

import { chromium } from 'playwright';

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';
const MIN_USABLE_LENGTH = 200;

function cleanText(raw) {
  return raw.replace(/\s+/g, ' ').trim();
}

async function plainFetch(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
    if (!res.ok) return null;
    const html = await res.text();
    const text = cleanText(
      html
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/g, ' ')
    );
    return text.length >= MIN_USABLE_LENGTH ? text : null;
  } catch {
    return null;
  }
}

// One shared browser instance per script run (launching Chromium per-page
// would be wasteful) — closed explicitly at the end via closeBrowser().
let browserPromise = null;
function getBrowser() {
  if (!browserPromise) {
    browserPromise = chromium.launch({ args: ['--disable-blink-features=AutomationControlled'] }).catch(err => {
      browserPromise = null;
      throw err;
    });
  }
  return browserPromise;
}

async function headlessFetch(url) {
  let context;
  try {
    const browser = await getBrowser();
    context = await browser.newContext({ userAgent: USER_AGENT, viewport: { width: 1280, height: 800 } });
    const page = await context.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(1500); // let client-side rendering settle before reading the DOM
    const text = cleanText(await page.evaluate(() => (document.body ? document.body.innerText : '')));
    return text.length >= MIN_USABLE_LENGTH ? text : null;
  } catch (err) {
    console.warn(`  ! headless fetch failed for ${url}: ${err.message}`);
    return null;
  } finally {
    if (context) await context.close().catch(() => {});
  }
}

export async function fetchPageText(url, maxChars = 4000) {
  const viaFetch = await plainFetch(url);
  if (viaFetch) return viaFetch.slice(0, maxChars);

  console.log(`  → plain fetch found nothing usable for ${url} — trying a real headless browser instead`);
  const viaBrowser = await headlessFetch(url);
  if (viaBrowser) {
    console.log(`  ✓ headless browser succeeded where plain fetch didn't: ${url}`);
    return viaBrowser.slice(0, maxChars);
  }

  return null;
}

export async function closeBrowser() {
  if (browserPromise) {
    try {
      const browser = await browserPromise;
      await browser.close();
    } catch {
      /* already closed or never successfully launched — nothing to do */
    }
    browserPromise = null;
  }
}
