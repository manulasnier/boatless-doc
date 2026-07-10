---
sidebar_position: 7
title: Changelog
---

import Changelog from '@site/src/components/Changelog';

# Changelog

Fetched automatically from the [boatless repository](https://github.com/manulasnier/boatless) at build time.

<Changelog entries={[
  {
    version: "0.0.7",
    date: "2026-05-07",
    sections: [
      { type: "Changed", items: [
        "Update grid system with mixins",
        "Use @container rules for better responsive",
        "Add responsive rules for .hide and .mb",
        "Use CSS custom properties (var())"
      ]}
    ]
  },
  {
    version: "0.0.6",
    date: "2026-04-14",
    sections: [
      { type: "Changed", items: [
        "Add gap param on flex mixin",
        "Remove colors UI on _var"
      ]}
    ]
  },
  {
    version: "0.0.5",
    date: "2025-08-28",
    sections: [
      { type: "Added", items: [
        "Add demo file in progress, to see mixins in action"
      ]},
      { type: "Changed", items: [
        "Rename project to boatless",
        "Improve mixins less"
      ]}
    ]
  },
  {
    version: "0.0.4",
    date: "2025-06-18",
    sections: [
      { type: "Changed", items: [
        "Remove unnecessary index.js file from root folder"
      ]}
    ]
  },
  {
    version: "0.0.3",
    date: "2025-06-18",
    sections: [
      { type: "Added", items: [
        "Add .npmignore to remove unnecessary files",
        "Add grid responsive"
      ]},
      { type: "Changed", items: [
        "Update project structure"
      ]}
    ]
  },
  {
    version: "0.0.2",
    date: "2025-06-11",
    sections: [
      { type: "Added", items: [
        "Add grid system",
        "Add test files"
      ]},
      { type: "Changed", items: [
        "Fix licence format file",
        "Dispatch mixins in category",
        "PostCSS processor only on build"
      ]},
      { type: "Fixed", items: [
        "Fixed breakpoints",
        "Fixed incorrect mixins with each()"
      ]}
    ]
  },
  {
    version: "0.0.1",
    date: "2025-06-01",
    sections: [
      { type: "Added", items: [
        "Add simple LESS structure",
        "Add tools to compile LESS files with linter"
      ]}
    ]
  }
]} />
