import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const RAW_URL =
  'https://raw.githubusercontent.com/manulasnier/boatless/main/CHANGELOG.md';

const SECTION_TYPES = ['Added', 'Changed', 'Fixed', 'Removed', 'Deprecated', 'Security'];

function parseChangelog(text) {
  const entries = [];
  const versionBlocks = text.split(/^## /m).slice(1);

  for (const block of versionBlocks) {
    const lines = block.trim().split('\n');
    const headerMatch = lines[0].match(/\[(.+?)\]\s*-\s*(\d{4}-\d{2}-\d{2})/);
    if (!headerMatch) continue;

    const version = headerMatch[1];
    const date = headerMatch[2];
    const sections = [];

    let currentType = null;
    let currentItems = [];

    for (const line of lines.slice(1)) {
      const sectionMatch = line.match(/^### (.+)/);
      if (sectionMatch) {
        if (currentType && currentItems.length) {
          sections.push({ type: currentType, items: currentItems });
        }
        currentType = sectionMatch[1].trim();
        currentItems = [];
        continue;
      }
      const itemMatch = line.match(/^[-*]\s+(.+)/);
      if (itemMatch && currentType) {
        currentItems.push(itemMatch[1].trim().replace(/'/g, "\\'"));
      }
    }
    if (currentType && currentItems.length) {
      sections.push({ type: currentType, items: currentItems });
    }

    if (sections.length) {
      entries.push({ version, date, sections });
    }
  }

  return entries;
}

function generateMdx(entries) {
  const entriesJson = entries.map(({ version, date, sections }) => {
    const sectionsStr = sections.map(({ type, items }) => {
      const itemsStr = items.map(i => `        '${i}'`).join(',\n');
      return `      { type: '${type}', items: [\n${itemsStr}\n      ]}`;
    }).join(',\n');

    return `  {
    version: '${version}',
    date: '${date}',
    sections: [\n${sectionsStr}\n    ]
  }`;
  }).join(',\n');

  return `---
sidebar_position: 7
title: Changelog
---

import Changelog from '@site/src/components/Changelog';

# Changelog

Fetched automatically from the [boatless repository](https://github.com/manulasnier/boatless) at build time.

<Changelog entries={[
${entriesJson}
]} />
`;
}

async function run() {
  console.log('Fetching CHANGELOG from boatless repo…');
  const res = await fetch(RAW_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch CHANGELOG: ${res.status} ${res.statusText}`);
  }
  const text = await res.text();
  const entries = parseChangelog(text);
  console.log(`Parsed ${entries.length} version(s): ${entries.map(e => e.version).join(', ')}`);

  const mdx = generateMdx(entries);
  const dest = resolve(__dirname, '../docs/changelog.md');
  writeFileSync(dest, mdx, 'utf-8');
  console.log(`changelog.md written to ${dest}`);
}

run();
