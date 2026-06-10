---
sidebar_position: 6
title: Helpers
---

# Helpers

Defined in `less/_helpers.less`. All helper classes use `!important` to override layout rules.

## Margin-bottom utilities

Classes from `.mb10` to `.mb100` in steps of 5.

```html
<section class="mb40">...</section>
```

### Responsive margin-bottom

Add a `-{bp}` suffix to apply the margin only at a specific breakpoint (media query):

```html
<div class="mb20 mb10-mobile">...</div>
```

Use `-c-{bp}` for container queries:

```html
<div class="mb20 mb10-c-tablet">...</div>
```

## Hide / Show utilities

### `.hide`

Unconditionally hides an element (`display: none`).

### `.hide-{bp}`

Hides the element at a given breakpoint:

```html
<div class="hide-mobile">Only visible above mobile</div>
```

### `.hide.display-{bp}`

Shows a hidden element at a given breakpoint:

```html
<div class="hide display-tablet">Visible at tablet and below</div>
```

### Container query variants

```html
<div class="hide-c-mobile">Hidden when container ≤ 639px</div>
```

Available breakpoints for all responsive helpers: `desktop-xxl`, `desktop-wide`, `desktop`, `laptop`, `tablet`, `mobile`, `xmobile`.

## .hidden

Sets `visibility: hidden` (element keeps its space).

```html
<div class="hidden">...</div>
```

## .spacing-v

Adds equal vertical padding (top + bottom) via a mixin:

```less
.section {
  .spacing-v(80px);
}
```

## .sr-only

Screen-reader only — visually hides element while keeping it accessible.

```html
<span class="sr-only">Skip to content</span>
```
