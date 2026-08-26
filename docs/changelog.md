---
sidebar_position: 7
title: Changelog
---

import Changelog from '@site/src/components/Changelog';

# Changelog

Fetched automatically from the [boatless repository](https://github.com/manulasnier/boatless) at build time.

<Changelog entries={[
  {
    version: '0.0.8',
    date: '2026-08-26',
    sections: [
      { type: 'Added', items: [
        'Add @touch media variable to target touch devices (hover: none / pointer: coarse)',
        'Add responsive only-picto on btn-base, with media and container declinations'
      ]},
      { type: 'Changed', items: [
        'Switch webpack config to ESM (webpack.config.mjs)'
      ]}
    ]
  },
  {
    version: '0.0.7',
    date: '2026-05-07',
    sections: [
      { type: 'Changed', items: [
        'Update grid system with mixins',
        'use @container rules for better responsive',
        'add responsive rules for .hide and .mb',
        'use css var'
      ]}
    ]
  },
  {
    version: '0.0.6',
    date: '2026-04-14',
    sections: [
      { type: 'Changed', items: [
        'Add gap param on flex mixin',
        'Remove colors UI on _var'
      ]}
    ]
  },
  {
    version: '0.0.5',
    date: '2025-08-28',
    sections: [
      { type: 'Added', items: [
        'Add demo file in progress, to see mixins in action'
      ]},
      { type: 'Changed', items: [
        'Rename project to boatless, more funny name',
        'Improve mixins less'
      ]}
    ]
  },
  {
    version: '0.0.4',
    date: '2025-06-18',
    sections: [
      { type: 'Changed', items: [
        'Remove unecessary index.js file to root folder'
      ]}
    ]
  },
  {
    version: '0.0.3',
    date: '2025-06-18',
    sections: [
      { type: 'Added', items: [
        'Add npmignore to remove unecessary files - for repo optimisation',
        'Add grid responsive'
      ]},
      { type: 'Changed', items: [
        'Update structure project'
      ]}
    ]
  },
  {
    version: '0.0.2',
    date: '2025-06-11',
    sections: [
      { type: 'Added', items: [
        'Add grid system',
        'Add test files'
      ]},
      { type: 'Changed', items: [
        'Fix licence format file',
        'Dispatch mixins in category - all is mixin',
        'PostCSS processor only on build'
      ]},
      { type: 'Fixed', items: [
        'Fixed breakpoints',
        'Fixed incorrect mixins with each()'
      ]}
    ]
  },
  {
    version: '0.0.1',
    date: '2025-06-01',
    sections: [
      { type: 'Added', items: [
        'Add simple structure less',
        'Add tools to compile less files with linter'
      ]}
    ]
  }
]} />
