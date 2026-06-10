import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const RAW_URL =
  'https://raw.githubusercontent.com/manulasnier/boatless/master/CHANGELOG.md';

async function fetchChangelog() {
  console.log('Fetching CHANGELOG from boatless repo…');
  const res = await fetch(RAW_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch CHANGELOG: ${res.status} ${res.statusText}`);
  }
  const text = await res.text();
  const dest = resolve(__dirname, '../docs/_changelog_content.md');
  writeFileSync(dest, text, 'utf-8');
  console.log(`CHANGELOG written to ${dest}`);
}

fetchChangelog();
