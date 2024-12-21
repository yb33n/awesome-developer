---
sidebar_position: 5
---

# CSS Size Units

In CSS, size units are crucial for defining dimensions, spacing, and layout of elements. Understanding different units and when to use them is essential for creating responsive and well-structured designs.

## Absolute Units

Absolute units are fixed and appear as the same size regardless of the parent element or viewport size.

### Pixels (px)

The most common absolute unit, pixels provide precise control.

```css
.box {
  width: 300px;
  height: 200px;
}
```

### Points (pt)

Typically used in print stylesheets. 1pt is approximately 1/72 of an inch.

```css
.print-text {
  font-size: 12pt;
}
```

### Inches (in), Centimeters (cm), Millimeters (mm)

These units are less common in web design but can be useful for print stylesheets.

```css
.print-margin {
  margin: 1in 2cm 5mm;
}
```

## Relative Units

Relative units are scalable and flexible, often preferred for responsive design.

### Em (em)

Relative to the font-size of the element (2em means 2 times the size of the current font).

```css
.paragraph {
  font-size: 1em;
  margin-bottom: 1.5em;
}
```

### Root Em (rem)

Similar to em, but always relative to the root element's font-size.

```css
html {
  font-size: 16px;
}

.title {
  font-size: 2rem; /* 32px */
}
```

### Viewport Width (vw) and Height (vh)

Relative to 1% of the viewport's width or height.

```css
.hero {
  width: 100vw;
  height: 50vh;
}
```

### Percentage (%)

Relative to the parent element's size.

```css
.container {
  width: 80%;
  max-width: 1200px;
}
```

## Viewport Units

### Viewport Minimum (vmin) and Maximum (vmax)

vmin is relative to the smaller dimension of the viewport, vmax to the larger.

```css
.square {
  width: 50vmin;
  height: 50vmin;
}
```

## Flexible Units

### Fraction Units (fr)

Used in CSS Grid to distribute available space.

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
```
- This creates a three-column grid layout.
- The available width is divided into 4 parts (1 + 2 + 1 = 4).
- The first column gets 1/4 of the space.
- The second column gets 2/4 (or 1/2) of the space.
- The third column gets 1/4 of the space.

## Choosing the Right Unit

- Use `px` for precise control and thin borders.
- Use `em` or `rem` for scalable typography and maintaining proportions.
- Use `%` for responsive layouts and when elements need to be proportional to their parents.
- Use `vw` and `vh` for viewport-relative sizing.
- Use `fr` in grid layouts for flexible distribution of space.

## Example: Combining Units

```css
body {
  font-size: 16px;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1em;
}

.hero-image {
  width: 100%;
  height: 50vh;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
}
```
