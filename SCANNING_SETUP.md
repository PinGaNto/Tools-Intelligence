# Real sourcing — setup

This wires the "Run monitoring scan" button to an actual GitHub Actions workflow
that fetches real source pages and uses Groq's free API to extract new updates.

(Earlier version of this used GitHub Models for a fully keyless setup — that
service was retired by GitHub on July 30, 2026, so a provider key is now
unavoidable. Groq's free tier is the closest thing to it: no credit card, and
its limits — ~30 requests/min, 1,000/day — are far more than this weekly scan
needs.)

## One-time setup

1. Push these files to your repo:
   - `.github/workflows/scan.yml`
   - `scripts/scan.mjs`
   - `data/sources.json`
   - updated `app.js`, `data.js`

2. Get a free Groq API key:
   - Go to https://console.groq.com/keys (sign up — no credit card needed)
   - Create a new API key, copy it

3. Add it as a repo secret:
   - Repo → **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `GROQ_API_KEY`
   - Value: paste the key

4. In your repo: **Settings → Actions → General → Workflow permissions** →
   select **"Read and write permissions"**. This lets the workflow commit the
   updated `data.js` back to the repo.

5. Double check `GITHUB_REPO` near the top of `app.js` matches your actual
   `owner/repo` (currently set to `pinganto/Tools-Intelligence`, guessed from
   the `og:url` in your `index.html` — fix it if that's wrong).

## Running it

- **Automatic:** runs every Sunday at 00:00 UTC.
- **Manual:** clicking "Run monitoring scan" on the site links to
  `github.com/<repo>/actions/workflows/scan.yml`. From there, click
  **"Run workflow"** (top right) — this requires being signed into GitHub with
  write access to the repo. It takes a bit, not a few seconds; refresh the
  site afterward to see the new "last scanned" time and any new items.

## What's actually automated vs. not

| Page | Status |
|---|---|
| Updates | ✅ Automated — fetches each tool's real changelog/blog/newsroom page (see `data/sources.json`), asks the model to extract genuinely new dated items, dedupes against what's already recorded. |
| Trending | ✅ Automated — fetches a curated set of major AI/tech blogs, extracts newsworthy items, re-ranks by date. |
| Issues | ⛔ **Not automated.** Complaint sources like G2 and BBB are JS-rendered and/or block plain `fetch()` requests, so a script can't reliably pull real content from them. This page stays hand-curated in `data.js` for now. Automating it properly needs a real search/scraping API — happy to wire that in once you pick one. |

## Some source URLs are unverified

A few entries in `data/sources.json` are marked `"verify": true` — those are
best-guess URLs for tools I didn't have a chance to confirm actually list
recent posts (Statista, Brandwatch, Meltwater, ListenFirst, Mintel, Julius,
Siftsy, VwD, Sprinklr). Before relying on results for those tools, open the
URL yourself and check it's a real, current listing page — then flip
`"verify"` to `false` once confirmed, or fix the URL if it's wrong. The script
will silently skip a tool if the fetched page comes back too short/empty
(usually a sign it's JS-rendered and needs a different URL).

## Model used

Defaults to `llama-3.3-70b-versatile` via Groq. Change it with the
`SCAN_MODEL` env var in `scan.yml` if you want a different model from
[Groq's catalog](https://console.groq.com/docs/models).

## If a run fails

Open the failed run in the Actions tab → click the "Run sourcing scan" step →
read the log. The script logs a `[debug]` line and, on failure, the full raw
response (status + headers + body) from Groq — that's almost always enough to
tell what went wrong (bad/missing key, rate limit, etc.) without guessing.
