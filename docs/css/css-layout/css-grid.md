---
sidebar_position: 5
---

# CSS Grid

CSS Grid Layout is a two-dimensional layout system for the web, allowing you to layout content in rows and columns. It offers a level of control that's perfect for creating complex layouts and managing the alignment and sizing of website elements and content.

## Grid Container Properties

To create a grid container, you use `display: grid;` on an element. This establishes a new grid formatting context for the contents of the container.

### display

```css
.container {
  display: grid;
}
```

### grid-template-columns and grid-template-rows

These properties define the columns and rows of the grid with a space-separated list of values.

```css
.container {
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 50px 50px;
}
```

You can use the `fr` unit to create flexible grid tracks:

```css
.container {
  grid-template-columns: 1fr 2fr 1fr;
}
```

### gap, row-gap, column-gap

These properties control the size of the grid lines:

```css
.container {
  gap: 10px;
  row-gap: 15px;
  column-gap: 10px;
}
```

### justify-items and align-items

These properties align grid items inside their cells:

```css
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
```

### justify-content and align-content

These properties align the grid within the container:

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
```

## Grid Item Properties

### grid-column and grid-row

These properties allow you to specify a grid item's location:

```css
.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
```

### justify-self and align-self

These properties allow you to align an individual grid item inside its cell:

```css
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
```

## Creating Grid Layouts

Here's an example of creating a basic grid layout:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
  gap: 10px;
}

.item-a {
  grid-column: 1 / 3;
  grid-row: 1;
}

.item-b {
  grid-column: 3;
  grid-row: 1 / 3;
}
```

## Grid Areas and Template Areas

Grid areas allow you to name areas of your grid and place items in them:

```css
.container {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

## Responsive Grid Designs

CSS Grid makes it easy to create responsive designs. Here's an example:

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
```

This creates a responsive grid where columns automatically adjust based on the container width.

You can also use media queries to change your grid layout at different breakpoints:

```css
.container {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 600px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Advanced Grid Techniques

### Auto-Fill and Auto-Fit

```css
.container {
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
```

`auto-fill` will create as many tracks as will fit in the container, even if they're empty. `auto-fit` will expand the tracks to fill the container.

### Implicit Grids

Grid will automatically generate rows or columns for content that doesn't fit in the explicit grid:

```css
.container {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
```

### Subgrids

Subgrid allows a grid item to inherit the grid lines of its parent grid:

```css
.item {
  display: grid;
  grid-template-columns: subgrid;
}
```
