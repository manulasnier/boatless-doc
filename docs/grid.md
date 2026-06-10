---
sidebar_position: 5
title: Grid System
---

# Grid System

Defined in `less/_layout.less`. The grid system uses the `.gcols` class with modifier classes for column count, spans, and responsive behavior.

Since v0.0.7, responsive modifiers support both **media queries** and **CSS container queries**.

## Base usage

```html
<div class="gcols col3">
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

## Column count classes

| Class | Columns |
|-------|---------|
| `.col2` | 2 equal columns |
| `.col3` | 3 equal columns |
| `.col4` | 4 equal columns |

## Span modifiers (col4)

Used on `.gcols.col4` to create asymmetric layouts:

| Class | Effect |
|-------|--------|
| `.span1-3` | last child spans 3 |
| `.span3-1` | first child spans 3 |
| `.span2-1-1` | first child spans 2 |
| `.span1-1-2` | last child spans 2 |
| `.span1-2-1` | second child spans 2 |

## Span modifiers (col3)

| Class | Effect |
|-------|--------|
| `.span1-2` | last child spans 2 |
| `.span2-1` | first child spans 2 |

## Alignment

Add `.center` to vertically align items:

```html
<div class="gcols col2 center">...</div>
```

## Responsive — media queries

Switch to fewer columns at a given breakpoint using `-{bp}` suffix:

```html
<!-- 3 cols by default, 2 cols at tablet, 1 col at mobile -->
<div class="gcols col3 col2-tablet col1-mobile">
  ...
</div>
```

Available breakpoints: `desktop-xxl`, `desktop-wide`, `desktop`, `laptop`, `tablet`, `mobile`, `xmobile`.

| Pattern | Effect |
|---------|--------|
| `.col3-{bp}` | Switch to 3 cols at breakpoint |
| `.col2-{bp}` | Switch to 2 cols at breakpoint |
| `.col1-{bp}` | Switch to 1 col (stacked) at breakpoint |

## Responsive — container queries

Use the `-c-{bp}` suffix to respond to the **container width** instead of the viewport:

```html
<div style="container-type: inline-size;">
  <div class="gcols col3 col1-c-tablet">
    ...
  </div>
</div>
```

The parent element must have `container-type: inline-size` set.

## `.cols` — Flex-based layout

`.cols` is a flex alternative to `.gcols` for horizontal layouts:

```html
<div class="cols">
  <div>...</div>
  <div>...</div>
</div>
```

| Modifier | Effect |
|----------|--------|
| `.vertical` | `flex-direction: column` |
| `.full` | `justify-content: space-between` |
| `.fluid` | `flex-wrap: wrap` |
| `.top` | `align-items: flex-start` |
| `.right` | `justify-content: flex-end` |
| `.vertical.full` | column + stretch |

## Mixin-based grid

You can also use the `.grid()` mixin directly for custom grids:

```less
.my-grid {
  .grid(auto, repeat(3, 1fr), 24px);
}
```

See [Layout Mixins](./mixins/layout) for full reference.
