---
sidebar_position: 5
title: Components
---

# Components

Defined in `less/_components.less`. UI component mixins for buttons and visual utilities.

## Buttons

Buttons are built with two mixins : `.btn-base()` for structure and `.btn-style()` (or variants) for color.

### .btn-base

Defines the button structure, sizing, and behavior.

```less
.btn-base(
  @height: 50px,
  @padding: 20px,
  @rounded: 25px,
  @border: 1px,
  @fz: 1.6rem,
  @fw: 700,
  @tt: uppercase,
  @fz-picto: 2rem,
  @gap: 15px
)
```

| Param | Default | Description |
|-------|---------|-------------|
| `@height` | `50px` | Button height |
| `@padding` | `20px` | Horizontal padding |
| `@rounded` | `25px` | Border-radius |
| `@border` | `1px` | Border width |
| `@fz` | `1.6rem` | Font size |
| `@fw` | `700` | Font weight |
| `@tt` | `uppercase` | Text transform |
| `@fz-picto` | `2rem` | Icon font size |
| `@gap` | `15px` | Gap between text and icon |

**Modifier classes** available on any `.btn-base` element:

| Class | Effect |
|-------|--------|
| `.only-picto` | Square icon-only button (width = height) |
| `.round` | Fully circular (`border-radius: 50%`) |
| `.disabled` / `:disabled` | Dimmed, `cursor: not-allowed` |
| `.nohov` | Disables hover state |

```less
.btn {
  .btn-base(44px, 18px, 22px);
}
```

---

### .btn-style

Applies a filled color scheme with an outline hover effect.

```less
.btn-style(@colorbg: #ddd, @colortxt: #fff, @color-variant: #eee)
```

- Default: filled → outline on hover (border + text take `@colorbg` color)
- `.active` class forces the outline state
- `.hover-txt` modifier: hover keeps text color, outline uses `@colortxt`
- `.hover-variant` modifier: hover switches to `@color-variant` background
- `.invert` modifier: starts outline, fills on hover
- `.no-border` modifier: ghost button, border appears on hover only

```less
.btn {
  .btn-base();
  .btn-style(#1d71b8, #fff);
}
```

---

### .btn-style-invert

Starts as an outline button, fills on hover.

```less
.btn-style-invert(@colorbg: #666, @colortxt: #fff)
```

```less
.btn-outline {
  .btn-base();
  .btn-style-invert(#1d71b8, #fff);
}
```

---

### .btn-style-gradient

Gradient button with sliding hover effect (CSS `background-position` trick).

```less
.btn-style-gradient(@cstart: #eee, @center: #333, @cend: #000, @ctxt: #fff, @dir: 90deg)
```

```less
.btn-gradient {
  .btn-base();
  .btn-style-gradient(#36a9e1, #1d71b8, #0a4a8c, #fff, 90deg);
}
```

---

## Triangle generator

Generates CSS-only triangles using borders, useful for tooltips, arrows, and decorative elements.

```less
.triangle(@dir, @w, @h, @color)
```

| `@dir` values | Shape |
|---------------|-------|
| `top` | Triangle pointing up |
| `bottom` | Triangle pointing down |
| `left` | Triangle pointing left |
| `right` | Triangle pointing right |
| `topleft` | Corner triangle top-left |
| `topright` | Corner triangle top-right |
| `bottomleft` | Corner triangle bottom-left |
| `bottomright` | Corner triangle bottom-right |

```less
.tooltip::before {
  .triangle(bottom, 8px, 6px, #333);
}

.arrow::after {
  .triangle(right, 10px, 8px, #1d71b8);
}
```

---

## .no-scrollbar

Hides scrollbars cross-browser while keeping scroll functionality.

```less
.no-scrollbar(@x: auto, @y: hidden)
```

| Param | Default | Description |
|-------|---------|-------------|
| `@x` | `auto` | `overflow-x` |
| `@y` | `hidden` | `overflow-y` |

```less
.carousel {
  .no-scrollbar(auto, hidden);
}

.modal-body {
  .no-scrollbar(hidden, auto);
}
```
