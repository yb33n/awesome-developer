---
sidebar_position: 2
---

# CSS Flexbox Layout

Flexbox, or the Flexible Box Layout, is a powerful CSS layout model designed for creating efficient and predictable layouts, especially when dealing with different screen sizes and dynamic content. It provides a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic.

## Flex Container Properties

To start using Flexbox, you need to define a flex container by setting `display: flex;` on an element. This creates a flex formatting context for its contents.

### display: flex

```css
.container {
  display: flex;
}
```

This turns the element into a flex container, and its direct children become flex items.

### flex-direction

This property establishes the main axis, defining the direction flex items are placed in the flex container.

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- `row` (default): left to right
- `row-reverse`: right to left
- `column`: top to bottom
- `column-reverse`: bottom to top

### justify-content

This aligns flex items along the main axis of the current line of the flex container.

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

- `flex-start` (default): items are packed toward the start line
- `flex-end`: items are packed toward the end line
- `center`: items are centered along the line
- `space-between`: items are evenly distributed in the line
- `space-around`: items are evenly distributed with equal space around them
- `space-evenly`: items are distributed so that the spacing between any two items is equal

### align-items

This defines the default behavior for how flex items are laid out along the cross axis on the current line.

```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}
```

- `stretch` (default): stretch to fill the container
- `flex-start`: items are placed at the start of the cross axis
- `flex-end`: items are placed at the end of the cross axis
- `center`: items are centered in the cross-axis
- `baseline`: items are aligned such as their baselines align

### flex-wrap

By default, flex items will all try to fit onto one line. You can change that with this property.

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `nowrap` (default): all flex items will be on one line
- `wrap`: flex items will wrap onto multiple lines, from top to bottom
- `wrap-reverse`: flex items will wrap onto multiple lines from bottom to top

## Flex Item Properties

### flex-grow

This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.

```css
.item {
  flex-grow: 0; /* default */
}
```

### flex-shrink

This defines the ability for a flex item to shrink if necessary.

```css
.item {
  flex-shrink: 1; /* default */
}
```

### flex-basis

This defines the default size of an element before the remaining space is distributed.

```css
.item {
  flex-basis: auto; /* default */
}
```

### align-self

This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

## Common Flexbox Patterns and Examples

### 1. Navigation Bar

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### 2. Card Layout

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  flex: 0 1 calc(33.333% - 20px);
  margin: 10px;
}
```

### 3. Holy Grail Layout

```css
.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.holy-grail-body {
  display: flex;
  flex: 1;
}

.holy-grail-content {
  flex: 1;
}

.holy-grail-nav, .holy-grail-ads {
  flex: 0 0 12em;
}

.holy-grail-nav {
  order: -1;
}
```

### 4. Centering Content

```css
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

### 5. Equal Height Columns

```css
.equal-height-container {
  display: flex;
}

.equal-height-item {
  flex: 1;
}
```
