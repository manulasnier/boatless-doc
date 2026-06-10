---
sidebar_position: 5
title: Forms
---

# Forms Mixins

Defined in `less/_forms.less`.

## .placeholder

Style input placeholder text with cross-browser vendor prefixes.

```less
.placeholder(@color: @fontcolor, @opacity: 0.45)
```

```less
input[type="text"] {
  .placeholder(#333, 0.5);
}

textarea {
  .placeholder(#666, 0.35);
}
```

The mixin automatically generates `-webkit-`, `-moz-`, and `-ms-` prefixed selectors.
