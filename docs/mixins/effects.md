---
sidebar_position: 2
title: Effects
---

# Effects Mixins

Defined in `less/_mixins.less`.

## .rounded

```less
.rounded(@radius: 5px)
```

Sets `border-radius`.

```less
.card {
  .rounded(10px);
}
```

---

## .box-shadow

```less
.box-shadow(@x: 0px, @y: 3px, @blur: 5px, @opacity: 0.5)
```

```less
.card {
  .box-shadow(0px, 6px, 12px, 0.3);
}
```

---

## .box-shadow-inset

```less
.box-shadow-inset(@x: 10px, @y: 10px, @blur: 40px, @spread: 0, @opacity: 0.75)
```

```less
.input {
  .box-shadow-inset(0, 2px, 8px, 0, 0.2);
}
```

---

## .txt-shadow

```less
.txt-shadow(@x: 1px, @y: 1px, @blur: 1px, @opacity: 0.1)
```

```less
h1 {
  .txt-shadow(2px, 2px, 4px, 0.2);
}
```

---

## .transition

```less
.transition(@prop: all, @time: 250ms, @ease: ease)
```

```less
.btn {
  .transition(opacity, 200ms, ease-in-out);
}
```

---

## .rotate

```less
.rotate(@rotate: 180deg)
```

```less
.icon-open {
  .rotate(45deg);
}
```

---

## .translate

```less
.translate(@y: 20px, @x: 10px)
```

Applies `translateY` + `translateX`.

---

## .translateX / .translateY

```less
.translateX(@x: 10px)
.translateY(@y: 20px)
```

---

## .scale

```less
.scale(@val: 1.4)
```

---

## .origin

```less
.origin(@x: 0, @y: 0)
```

Sets `transform-origin`.

---

## .transform

```less
.transform(@rotate: 90deg, @scale: 1, @skew: 1deg, @translate: 10px)
```

Combines rotate, scale, skew, and translate in one declaration.

---

## .gradient

```less
.gradient(@origin: bottom, @color1: #fff, @color2: #000)
```

```less
.hero {
  .gradient(right, #6a11cb, #2575fc);
}
```
