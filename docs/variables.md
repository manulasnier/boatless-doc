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

## CSS custom properties

Since v0.0.7, boatless uses CSS custom properties alongside LESS variables. Define them in your project:

```css
:root {
  --gap: 20px;
  --col-gap: 20px;
}
```

These are referenced by the layout mixins and grid classes as default gap values.
