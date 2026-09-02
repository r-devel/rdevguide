// Crawls the rendered Quarto book with a headless browser and collects the
// axe-core JSON results that Quarto's `axe: { output: json }` option (set
// only under the "debug" project profile, see ../_quarto-debug.yml) logs to
// the browser console on each page load.
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
    const consoleMessages = [];
    page.on("console", (msg) => consoleMessages.push(msg.text()));

    const url = new URL(pagePath, baseUrl).toString();
    try {
      await page.goto(url, { waitUntil: "networkidle" });
    } catch (err) {
      console.warn(`  ! failed to load ${pagePath}: ${err.message}`);
      await page.close();
      continue;
    }

    // axe-core's JSON output is logged as a single console message containing
    // a JSON object with violations/passes/incomplete/inapplicable.
    let axeResult = null;
    for (const text of consoleMessages) {
      const trimmed = text.trim();
      if (!trimmed.startsWith("{")) continue;
      try {
        const parsed = JSON.parse(trimmed);
        if (parsed && (parsed.violations || parsed.passes || parsed.incomplete)) {
          axeResult = parsed;
          break;
        }
      } catch {
        // not JSON, skip
      }
    }

    if (axeResult) {
      results.push({ path: pagePath, url, axe: axeResult });
      console.log(
        `  ${pagePath}: ${axeResult.violations?.length ?? 0} violations, ` +
          `${axeResult.incomplete?.length ?? 0} incomplete`
      );
    } else {
      console.warn(`  ! no axe JSON found for ${pagePath}`);
    }

    await page.close();
  }

  await browser.close();
  return results;
}

function summarize(results) {
  const byImpact = {};
  let totalViolations = 0;
  const pagesWithViolations = [];

  for (const { path: p, axe } of results) {
    const violations = axe.violations ?? [];
    if (violations.length > 0) {
      pagesWithViolations.push({ path: p, count: violations.length });
    }
    for (const v of violations) {
      totalViolations += 1;
      byImpact[v.impact ?? "unknown"] = (byImpact[v.impact ?? "unknown"] ?? 0) + 1;
    }
  }

  return { pagesChecked: results.length, totalViolations, byImpact, pagesWithViolations };
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
  console.log(`Total violations: ${summary.totalViolations}`);
  console.log("By impact:", summary.byImpact);
  if (summary.pagesWithViolations.length > 0) {
    console.log("\nPages with violations:");
    for (const { path: p, count } of summary.pagesWithViolations) {
      console.log(`  ${p}: ${count}`);
    }
  }
  console.log(`\nFull results: ${path.relative(ROOT, reportPath)}`);
  console.log(`Summary: ${path.relative(ROOT, summaryPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
