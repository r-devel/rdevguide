# Accessibility check

This folder holds the tooling used to audit the rendered R Development Guide for accessibility issues (missing alt text, color contrast, keyboard access, etc.) using [axe-core](https://github.com/dequelabs/axe-core). `check-a11y.mjs` renders the book, serves `_book/` locally, and crawls every rendered page with headless Chromium via [Playwright](https://playwright.dev/) — the browser automation tool [Quarto's own accessibility docs](https://quarto.org/docs/output-formats/html-accessibility.html) suggest for this — collecting the axe-core JSON output that Quarto's `axe: { output: json }` option logs to the browser console on each page.

That option only lives in `../_quarto-debug.yml`, under the `debug` project profile — not in the main `../_quarto.yml`. Quarto's own docs recommend this (see the [site-wide accessibility checks](https://quarto.org/docs/output-formats/html-accessibility.html) docs) so a normal `quarto render` or `quarto publish` never ships the axe-core checker to real readers. `check-a11y.mjs` always renders with `quarto render --profile debug` itself, so you don't need to pass the profile flag by hand.

## Setup (once)

```sh
cd a11y
npm install
npx playwright install chromium
```

Requires Quarto on your `PATH` (the script shells out to `quarto render` from the repo root).

## Run

```sh
cd a11y
npm run a11y
```

This renders the book with the debug profile first, then crawls it. To skip the render step (e.g. if `_book/` is already up to date and was rendered with `--profile debug`), run the script directly:

```sh
node check-a11y.mjs --no-render
```

## Output

Results are written to `reports/` inside this folder (gitignored — regenerate locally whenever you need current results):

- `reports/results.json` — full axe-core output (violations, passes, incomplete, inapplicable) per page
- `reports/summary.json` — aggregate violation counts by impact and per page

A summary also prints to the console after each run.

## Making sense of `results.json`

`results.json` is large (roughly 10MB+ for this book) because axe-core logs every rule it checked per page, not just the failures — `passes` and `inapplicable` dwarf the `violations` array you actually care about. Two ways to turn that into something readable:

**Option A: hand it to an LLM.** Point an LLM (e.g. Claude) at `reports/results.json` and ask it to summarize the `violations` across all pages, grouped by rule (`id`) and impact, with the specific elements/images/selectors affected. This is the easiest route given the file's size.

**Option B: filter it yourself.** Each entry in the top-level array is one page (`path`, `url`, `axe`). The only field worth reading is `axe.violations` — ignore `axe.passes` and `axe.inapplicable`, which are the bulk of the file. Each violation has:

- `id` — the rule name (e.g. `image-alt`, `color-contrast`)
- `impact` — `critical` / `serious` / `moderate` / `minor`
- `description` / `help` — what the rule checks
- `nodes` — the actual offending elements, each with `html` (the markup) and `target` (a CSS selector to locate it)

Start with `reports/summary.json` for the aggregate counts (violations by impact, and by page), then use `jq` to drill into specific rules or pages in `results.json`, e.g. (run from this `a11y/` folder, same as above):

```sh
# every violation, one line each: page, rule id, impact
jq -c '.[] | .path as $p | .axe.violations[] | {page: $p, id, impact}' reports/results.json

# just image-alt violations, with the offending <img> markup
jq -c '.[] | .path as $p | .axe.violations[] | select(.id == "image-alt") | {page: $p, nodes: [.nodes[].html]}' reports/results.json

# only critical/serious violations
jq -c '.[] | .path as $p | .axe.violations[] | select(.impact == "critical" or .impact == "serious") | {page: $p, id, impact}' reports/results.json
```
