---
slug: /
sidebar_position: 1
title: Getting Started
---

# boatless

**boatless** is an open-source LESS CSS starter toolkit for web integrators. It provides utility classes, mixins, a grid system, and typography helpers to kickstart any web project using LESS.

## Installation

```bash
npm install boatless --save-dev
```

## Usage

Import boatless at the top of your main LESS file:

```less
@import "~boatless";
```

This imports `boat.less` which loads all partials automatically.

## What's included

| Module | Description |
|--------|-------------|
| [Variables](./variables) | Breakpoint variables and responsive helpers |
| [Mixins → Effects](./mixins/effects) | Border-radius, shadows, transitions, transforms, gradients |
| [Mixins → Layout](./mixins/layout) | Flex, grid, column, layout helpers |
| [Mixins → Typography](./mixins/typography) | Font stack mixin |
| [Mixins → Forms](./mixins/forms) | Placeholder styling |
| [Grid System](./grid) | `.gcols` grid classes with responsive modifiers |
| [Helpers](./helpers) | Margin-bottom utilities, hide/show classes, spacing |

## Requirements

- [LESS CSS](https://lesscss.org/) compiler
- A bundler such as [Webpack](https://webpack.js.org/) or [Vite](https://vitejs.dev/)

## License

GNU GPL v3.0 — [source on GitHub](https://github.com/manulasnier/boatless)
