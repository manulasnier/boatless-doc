---
sidebar_position: 4
title: Typography
---

# Typography Mixins

Defined in `less/_typography.less`.

## .font

Full font stack shorthand.

```less
.font(@ff: sans-serif, @fz: 4.4rem, @fw: 700, @tt: uppercase, @lh: 1.1, @mb: 0.5em)
```

| Param | Default | CSS property |
|-------|---------|--------------|
| `@ff` | `sans-serif` | `font-family` |
| `@fz` | `4.4rem` | `font-size` |
| `@fw` | `700` | `font-weight` |
| `@tt` | `uppercase` | `text-transform` |
| `@lh` | `1.1` | `line-height` |
| `@mb` | `0.5em` | `margin-bottom` |

```less
h1 {
  .font("Montserrat", sans-serif, 5rem, 800, uppercase, 1.15, 0.4em);
}

.subtitle {
  .font(inherit, 1.8rem, 400, none, 1.5, 1em);
}
```

## Utility classes

| Class | Effect |
|-------|--------|
| `.tt-upper` | `text-transform: uppercase` |
| `.tt-lower` | `text-transform: lowercase` |
| `.nott` | `text-transform: none` |
| `.tal` | `text-align: left` |
| `.tac` | `text-align: center` |
| `.tar` | `text-align: right` |
