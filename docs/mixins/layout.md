---
sidebar_position: 3
title: Layout
---

# Layout Mixins

Defined in `less/_layout.less`.

## .flex

Full flexbox shorthand.

```less
.flex(@fd: row, @align: center, @js: space-between, @gap: var(--gap))
```

| Param | Default | Description |
|-------|---------|-------------|
| `@fd` | `row` | `flex-direction` |
| `@align` | `center` | `align-items` |
| `@js` | `space-between` | `justify-content` |
| `@gap` | `var(--gap)` | `gap` |

```less
.header {
  .flex(row, center, space-between, 20px);
}
```

---

## .flex-i

Same as `.flex` but sets `display: inline-flex`.

```less
.flex-i(@fd: row, @align: center, @js: space-between, @gap: var(--gap))
```

---

## .flex-center

Centered flex shorthand.

```less
.flex-center(@direction: row, @gap: var(--gap))
```

```less
.btn-group {
  .flex-center(row, 10px);
}
```

---

## .flex-stretch

Stretched flex with `space-between`.

```less
.flex-stretch(@direction: row, @gap: var(--gap))
```

---

## .grid

CSS Grid shorthand.

```less
.grid(@row: auto, @col: repeat(2, 1fr), @gap: var(--gap))
```

```less
.card-grid {
  .grid(auto, repeat(3, 1fr), 24px);
}
```

---

## .column

CSS multi-column layout.

```less
.column(@count: 3, @width: 290px, @gap: var(--col-gap))
```

Automatically prevents children from breaking across columns.

```less
.news-list {
  .column(2, 320px, 30px);
}
```

---

## .layout

Centered max-width container.

```less
.layout(@width: 1500px, @padding: 10px)
```

```less
.wrapper {
  .layout(1200px, 20px);
}
```
