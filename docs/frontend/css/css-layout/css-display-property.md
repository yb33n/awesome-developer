---
sidebar_position: 2
---

# CSS Display Property

The `display` property is one of the most important CSS properties for controlling layout. It determines how an element should be rendered in the document flow and how it interacts with other elements.

## Basic Display Values

### 1. Block

Elements with `display: block;` have the following characteristics:
- Start on a new line
- Take up the full width available by default
- Respect width and height properties
- Can contain other block and inline elements

Common block-level elements include `<div>`, `<p>`, `<h1>-<h6>`, `<ul>`, `<ol>`, `<li>`, and `<section>`.

```css
.block-element {
  display: block;
  width: 50%;
  margin: 10px auto;
}
```

### 2. Inline

Elements with `display: inline;` have these characteristics:
- Do not start on a new line
- Only take up as much width as necessary
- Ignore width and height properties
- Cannot contain block-level elements

Common inline elements include `<span>`, `<a>`, `<strong>`, `<em>`, and `<img>`.

```css
.inline-element {
  display: inline;
  margin: 0 5px;
}
```

### 3. Inline-block

`display: inline-block;` combines features of both block and inline:
- Does not start on a new line
- Respects width and height properties
- Can have margins and padding

This is useful for creating horizontally aligned blocks.

```css
.inline-block-element {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 10px;
}
```

### 4. None

`display: none;` removes the element from the document flow:
- The element is not visible and does not take up space
- Different from `visibility: hidden;`, which hides the element but preserves its space

```css
.hidden-element {
  display: none;
}
```

## Advanced Display Values

### 5. Flex

`display: flex;` creates a flex container:
- Enables a flex context for all its direct children
- Allows for powerful alignment and distribution of space

```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### 6. Grid

`display: grid;` creates a grid container:
- Enables a grid context for all its direct children
- Allows for complex two-dimensional layouts

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

### 7. Table-related Values

CSS provides several table-related display values:
- `table`: Acts like a `<table>` element
- `table-row`: Acts like a `<tr>` element
- `table-cell`: Acts like a `<td>` element

These can be used to create table-like layouts without using actual table markup.

```css
.table {
  display: table;
}
.row {
  display: table-row;
}
.cell {
  display: table-cell;
  padding: 10px;
}
```

## Changing Display Behavior

You can change an element's default display value to alter its behavior:

```css
/* Make an inline element block-level */
span.block {
  display: block;
}

/* Make a block element inline */
div.inline {
  display: inline;
}
```

## Responsive Design with Display

The `display` property can be used in media queries to create responsive layouts:

```css
.container {
  display: block;
}

@media (min-width: 768px) {
  .container {
    display: flex;
  }
}
```

## Examples and Use Cases

1. Creating a navigation menu:

```css
nav ul {
  display: flex;
  list-style-type: none;
  padding: 0;
}

nav li {
  margin: 0 10px;
}
```

2. Grid layout for a photo gallery:

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
```

3. Inline-block for button groups:

```css
.button-group button {
  display: inline-block;
  margin: 0 5px;
}
```

4. Responsive layout switching:

```css
.card-container {
  display: block;
}

@media (min-width: 768px) {
  .card-container {
    display: flex;
    flex-wrap: wrap;
  }
  
  .card {
    flex: 0 1 calc(50% - 20px);
    margin: 10px;
  }
}
```
