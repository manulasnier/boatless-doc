import { readdirSync, readFileSync, existsSync, statSync } from 'fs';
import { resolve, join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BUILD_DIR = resolve(__dirname, '../build');

// Docusaurus validates links written in Markdown, but not the ones declared in
// docusaurus.config.ts (navbar, footer). Those already shipped broken once, so
// the built HTML is the only source of truth worth checking.
function htmlFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...htmlFiles(path));
    else if (entry.name.endsWith('.html')) out.push(path);
  }
  return out;
}

// Matches href="/a", href='/a' and the unquoted href=/a produced by the minifier
const HREF = /href=(?:"([^"]*)"|'([^']*)'|([^\s">]+))/g;

function internalLinks(html) {
  const links = new Set();
  for (const match of html.matchAll(HREF)) {
    const href = match[1] ?? match[2] ?? match[3];
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const path = href.split('#')[0].split('?')[0];
    if (path) links.add(path);
  }
  return links;
}

function resolves(path) {
  const base = join(BUILD_DIR, decodeURIComponent(path));
  const candidates = [base, `${base}.html`, join(base, 'index.html')];
  return candidates.some(c => existsSync(c) && statSync(c).isFile());
}

function run() {
  if (!existsSync(BUILD_DIR)) {
    throw new Error(`No build directory at ${BUILD_DIR} — run "npm run build" first`);
  }

  const pages = htmlFiles(BUILD_DIR);
  const broken = new Map();
  let checked = 0;

  for (const page of pages) {
    const from = page.replace(BUILD_DIR, '') || '/';
    for (const link of internalLinks(readFileSync(page, 'utf-8'))) {
      checked += 1;
      if (resolves(link)) continue;
      if (!broken.has(link)) broken.set(link, new Set());
      broken.get(link).add(from);
    }
  }

  console.log(`Checked ${checked} internal link(s) across ${pages.length} page(s).`);

  if (broken.size) {
    console.error(`\n${broken.size} broken internal link(s):\n`);
    for (const [link, sources] of broken) {
      console.error(`  ${link}`);
      for (const source of sources) console.error(`      linked from ${source}`);
    }
    process.exit(1);
  }

  console.log('No broken internal links.');
}

run();
