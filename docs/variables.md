---
sidebar_position: 2
title: Variables & Breakpoints
---

# Variables & Breakpoints

Defined in `less/_var.less`. These variables power all responsive features across the toolkit.

## Breakpoint list

The `@breakpoints` list drives all generated responsive classes (helpers, grid, etc.).

```less
@breakpoints: desktop-xxl, desktop-wide, desktop, laptop, tablet, mobile, xmobile;
```

## Breakpoint values

| Variable | Value | Media query |
|----------|-------|-------------|
| `@bp-desktop-xxl` | `1770px` | `@desktop-xxl` |
| `@bp-desktop-wide` | `1499px` | `@desktop-wide` |
| `@bp-desktop` | `1199px` | `@desktop` |
| `@bp-laptop` | `1023px` | `@laptop` |
| `@bp-tablet` | `767px` | `@tablet` |
| `@bp-mobile` | `639px` | `@mobile` |
| `@bp-xmobile` | `489px` | `@xmobile` |

## Media query variables

Each breakpoint exposes a `max-width` media query variable:

```less
@desktop-xxl:  ~"(max-width: @{bp-desktop-xxl})";
@desktop-wide: ~"(max-width: @{bp-desktop-wide})";
@desktop:      ~"(max-width: @{bp-desktop})";
@laptop:       ~"(max-width: @{bp-laptop})";
@tablet:       ~"(max-width: @{bp-tablet})";
@mobile:       ~"(max-width: @{bp-mobile})";
@xmobile:      ~"(max-width: @{bp-xmobile})";
```

### Usage in your LESS

```less
.my-element {
  font-size: 1.6rem;

  @media @tablet {
    font-size: 1.4rem;
  }

  @media @mobile {
    font-size: 1.2rem;
  }
}
```

## Touch devices

Since v0.0.8, the `@touch` variable targets devices without hover capability and with a coarse pointer — touchscreens (phones, tablets, hybrid devices in tablet mode).

```less
@touch: ~"(hover: none) and (pointer: coarse)";
```

Unlike breakpoints, it is based on **input capability**, not viewport width. A narrow desktop window stays non-touch; a large tablet stays touch.

### Usage in your LESS

```less
.my-button {
  padding: 8px 16px;

  &:hover {
    background: #eee;
  }

  // Bigger tap target, drop the hover state
  @media @touch {
    padding: 14px 20px;

    &:hover {
      background: none;
    }
  }
}
```

It can be combined with a breakpoint when both conditions matter:

```less
@media @touch and @tablet {
  .my-nav {
    display: none;
  }
}
```

Compiles to:

```css
@media (hover: none) and (pointer: coarse) and (max-width: 767px) {
  .my-nav {
    display: none;
  }
}
```

## CSS custom properties

Since v0.0.7, boatless uses CSS custom properties alongside LESS variables. Define them in your project:

```css
:root {
  --gap: 20px;
  --col-gap: 20px;
}
```

These are referenced by the layout mixins and grid classes as default gap values.
