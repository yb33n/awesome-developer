---
sidebar_position: 3
---

# CSS Selectors

CSS selectors are patterns used to select and style HTML elements. They are fundamental to applying styles in CSS, allowing you to target specific elements or groups of elements with great precision.

## Basic Selectors

### Element Selector

Selects all instances of a specific HTML element.

```html
<p>This is a paragraph.</p>
```

```css
p {
  color: blue;
}
```

### Class Selector

Selects elements with a specific class attribute.

```html
<div class="highlight">This is highlighted text.</div>
```

```css
.highlight {
  background-color: yellow;
}
```

### ID Selector

Selects a single element with a specific id attribute.

```html
<h1 id="header">Main Header</h1>
```

```css
#header {
  font-size: 24px;
}
```

### Universal Selector

Selects all elements on the page.

```html
<div>This is a div</div>
<p>This is a paragraph</p>
```

```css
* {
  box-sizing: border-box;
}
```

## Combinators

### Element Class Selector

Selects all instances of a specific HTML element and elements with a specific class attribute.

```html
<div class="first">
    <p>This paragraph is inside a div.</p>
</div>
```

```css
div.first {
    background-color: #7a7a7a;
}
```

### Descendant Selector

Selects all elements that are descendants of a specified element.

```html
<article>
  <p>This paragraph is inside an article.</p>
</article>
```

```css
article p {
  line-height: 1.5;
}
```

### Child Selector

Selects all direct child elements of a specified element.

```html
<ul>
  <li>Direct child</li>
  <li>Direct child
    <ul>
      <li>Grandchild</li>
    </ul>
  </li>
</ul>
```

```css
ul > li {
  list-style-type: square;
}
```

### Adjacent Sibling Selector

Selects an element that is directly after another specific element.

```html
<h1>Header</h1>
<p>This paragraph is adjacent to the h1.</p>
<p>This paragraph is not.</p>
```

```css
h1 + p {
  font-weight: bold;
}
```

### General Sibling Selector

Selects all elements that are siblings of a specified element.

```html
<h1>Header</h1>
<p>First paragraph</p>
<div>A div</div>
<p>Second paragraph</p>
```

```css
h1 ~ p {
  margin-left: 20px;
}
```

## Attribute Selectors

### Attribute Presence Selector

Selects elements with a specific attribute.

```html
<div data-tooltip="This is a tooltip">Hover over me</div>
```

```css
[data-tooltip] {
  cursor: help;
}
```

### Attribute Value Selector

Selects elements with a specific attribute value.

```html
<input type="text" name="username">
```

```css
[type="text"] {
  border: 1px solid gray;
}
```

### Attribute Value Contains Selector

Selects elements whose attribute value contains a specific word.

```html
<button class="btn-primary">Primary Button</button>
<button class="btn-secondary">Secondary Button</button>
```

```css
[class*="btn"] {
  padding: 5px 10px;
}
```

## Pseudo-classes

Pseudo-classes select elements based on a certain state or condition.

```html
<a href="#">Hover over me</a>
<input type="text">
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

```css
a:hover {
  text-decoration: underline;
}

input:focus {
  outline: 2px solid blue;
}

li:first-child {
  font-weight: bold;
}

li:nth-child(even) {
  background-color: #f0f0f0;
}
```

## Pseudo-elements

Pseudo-elements allow you to style a specific part of an element.

```html
<p>This is a paragraph with a styled first letter and added content.</p>
```

```css
p::first-letter {
  font-size: 2em;
  font-weight: bold;
}

p::before {
  content: "→ ";
}

p::after {
  content: " ←";
}
```

## Grouping Selectors

You can group multiple selectors to apply the same styles to different elements.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
```

```css
h1, h2, h3 {
  font-family: Arial, sans-serif;
}
```
