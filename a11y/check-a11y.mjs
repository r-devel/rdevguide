// Crawls the rendered Quarto book with a headless browser and collects the
// axe-core JSON results that Quarto's `axe: { output: json }` option (set
// only under the "debug" project profile, see ../_quarto-debug.yml) logs to
// the browser console on each page load. Each page is then reloaded with
// dark mode requested via localStorage (the same "quarto-color-scheme"
// sentinel the site's own toggle button writes) and re-checked, so
// dark-mode-only issues aren't missed. This has to be a real reload rather
// than an in-page toggle: Chromium doesn't reliably re-apply a <link
// rel="disabled-stylesheet"> that gets flipped back to "stylesheet" at
// runtime, so a live toggle leaves the page visually unchanged even though
// the toggle's own bookkeeping (body class, link rel) looks correct.
//
// Usage: npm run a11y  (runs `quarto render --profile debug` first; pass
// --no-render to skip)

import { execFileSync } from "node:child_process";
import { createServer } from "node:http";
import { readFile, readdir, stat, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SITE_DIR = path.join(ROOT, "_book");
const REPORT_DIR = path.join(__dirname, "reports");
const PORT = 4174;

const MIME = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".xml": "application/xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function serveSite() {
  const server = createServer(async (req, res) => {
    try {
      let reqPath = decodeURIComponent(req.url.split("?")[0]);
      if (reqPath.endsWith("/")) reqPath += "index.html";
      let filePath = path.join(SITE_DIR, reqPath);
      try {
        const s = await stat(filePath);
        if (s.isDirectory()) filePath = path.join(filePath, "index.html");
      } catch {
        // fall through, might already point at a file with extension
      }
      const body = await readFile(filePath);
      const ext = path.extname(filePath);
      res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  });
  return new Promise((resolve) => {
    server.listen(PORT, () => resolve(server));
  });
}

// Directories under _book that are Quarto/site infrastructure, not content
// pages, and shouldn't be checked (vendored JS libs, search index assets).
const SKIP_DIRS = new Set(["site_libs"]);

// axe-core's JSON output is logged as a single console message containing
// a JSON object with violations/passes/incomplete/inapplicable.
function extractAxeJson(consoleMessages) {
  for (const text of consoleMessages) {
    const trimmed = text.trim();
    if (!trimmed.startsWith("{")) continue;
    try {
      const parsed = JSON.parse(trimmed);
      if (parsed && (parsed.violations || parsed.passes || parsed.incomplete)) {
        return parsed;
      }
    } catch {
      // not JSON, skip
    }
  }
  return null;
}

async function listHtmlFiles(dir, base = dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      files = files.concat(await listHtmlFiles(path.join(dir, entry.name), base));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      const rel = "/" + path.relative(base, path.join(dir, entry.name)).split(path.sep).join("/");
      files.push(rel);
    }
  }
  return files;
}

async function crawl(baseUrl, pagePaths) {
  const browser = await chromium.launch();
  const results = [];

  for (const pagePath of pagePaths) {
    const page = await browser.newPage();
    let consoleMessages = [];
    page.on("console", (msg) => consoleMessages.push(msg.text()));

    const url = new URL(pagePath, baseUrl).toString();
    try {
      await page.goto(url, { waitUntil: "networkidle" });
    } catch (err) {
      console.warn(`  ! failed to load ${pagePath}: ${err.message}`);
      await page.close();
      continue;
    }

    const axeResult = extractAxeJson(consoleMessages);

    // Reload with dark mode requested via the same localStorage sentinel the
    // site's own toggle button writes, and re-scrape the axe-core JSON that
    // logs again on this fresh load. See the file-level comment for why this
    // has to be a reload rather than an in-page call to
    // window.quartoToggleColorScheme.
    let axeDarkResult = null;
    const hasDarkToggle = await page.evaluate(
      () => typeof window.quartoToggleColorScheme === "function"
    );
    if (hasDarkToggle) {
      consoleMessages = [];
      try {
        await page.evaluate(() => localStorage.setItem("quarto-color-scheme", "alternate"));
        await page.reload({ waitUntil: "networkidle" });
        axeDarkResult = extractAxeJson(consoleMessages);
      } catch (err) {
        console.warn(`  ! dark-mode reload failed for ${pagePath}: ${err.message}`);
      }
    }

    if (axeResult) {
      results.push({ path: pagePath, url, axe: axeResult, axeDark: axeDarkResult });
      console.log(
        `  ${pagePath}: light ${axeResult.violations?.length ?? 0} violations` +
          (axeDarkResult ? `, dark ${axeDarkResult.violations?.length ?? 0} violations` : ", dark skipped")
      );
    } else {
      console.warn(`  ! no axe JSON found for ${pagePath}`);
    }

    await page.close();
  }

  await browser.close();
  return results;
}

function summarizeTheme(results, axeKey) {
  const byImpact = {};
  let totalViolations = 0;
  const pagesWithViolations = [];

  for (const { path: p, [axeKey]: axe } of results) {
    if (!axe) continue;
    const violations = axe.violations ?? [];
    if (violations.length > 0) {
      pagesWithViolations.push({ path: p, count: violations.length });
    }
    for (const v of violations) {
      totalViolations += 1;
      byImpact[v.impact ?? "unknown"] = (byImpact[v.impact ?? "unknown"] ?? 0) + 1;
    }
  }

  return { totalViolations, byImpact, pagesWithViolations };
}

function summarize(results) {
  return {
    pagesChecked: results.length,
    light: summarizeTheme(results, "axe"),
    dark: summarizeTheme(results, "axeDark"),
  };
}

async function main() {
  const skipRender = process.argv.includes("--no-render");

  if (!skipRender) {
    console.log("Rendering book with Quarto (debug profile, for axe-core output)...");
    execFileSync("quarto", ["render", "--profile", "debug"], { cwd: ROOT, stdio: "inherit" });
  }

  console.log(`Serving _book on http://localhost:${PORT} ...`);
  const server = await serveSite();

  const pagePaths = await listHtmlFiles(SITE_DIR);
  console.log(`Found ${pagePaths.length} rendered pages. Checking each with axe-core...`);
  const results = await crawl(`http://localhost:${PORT}/`, pagePaths);

  server.close();

  await mkdir(REPORT_DIR, { recursive: true });
  const reportPath = path.join(REPORT_DIR, "results.json");
  await writeFile(reportPath, JSON.stringify(results, null, 2));

  const summary = summarize(results);
  const summaryPath = path.join(REPORT_DIR, "summary.json");
  await writeFile(summaryPath, JSON.stringify(summary, null, 2));

  console.log("\n--- Summary ---");
  console.log(`Pages checked: ${summary.pagesChecked}`);
  for (const theme of ["light", "dark"]) {
    const { totalViolations, byImpact, pagesWithViolations } = summary[theme];
    console.log(`\n[${theme}] Total violations: ${totalViolations}`);
    console.log(`[${theme}] By impact:`, byImpact);
    if (pagesWithViolations.length > 0) {
      console.log(`[${theme}] Pages with violations:`);
      for (const { path: p, count } of pagesWithViolations) {
        console.log(`  ${p}: ${count}`);
      }
    }
  }
  console.log(`\nFull results: ${path.relative(ROOT, reportPath)}`);
  console.log(`Summary: ${path.relative(ROOT, summaryPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
