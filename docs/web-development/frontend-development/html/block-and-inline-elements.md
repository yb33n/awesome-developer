---
sidebar_position: 3
---

# Block and Inline Elements

In HTML, elements are typically classified into two main categories: block-level elements and inline elements. Understanding the difference between these two types is crucial for proper page layout and styling.

### Block-level Elements

Block-level elements have the following characteristics:

- Start on a new line
- Take up the full width available by default
- Have a top and bottom margin

Common block-level elements include:

- `<div>`
- `<p>`
- `<h1>` to `<h6>`
- `<ul>` and `<ol>`
- `<section>`
- `<article>`

Example:
```html
<p>This is a paragraph.</p>
<div>This is a div element.</div>
```

### Inline Elements

Inline elements have the following characteristics:

- Do not start on a new line
- Only take up as much width as necessary
- Do not have top and bottom margins

Common inline elements include:

- `<span>`
- `<a>`
- `<strong>`
- `<em>`
- `<img>`
- `<br>`
- `<input>`

Example:
```html
<p>This is a <span style="color: red;">red</span> word in a paragraph.</p>
```

> **Note**:
>
> All block-level elements have an opening and closing tags. As a result, self-enclosing elements are inline elements. (eg. `<input>`, `<img>`, `<br>`)
>
> Exceptions to the block/inline elements: list items for the `<li>`, table, table rows, table cells for `<table>`, `<tr>` and `<td>` respectively

### Changing Display Behavior

You can change how an element behaves using CSS. The `display` property can be used to make a block-level element behave like an inline element, or vice versa:

```css
/* Make a div behave like an inline element */
div {
    display: inline;
}

/* Make a span behave like a block-level element */
span {
    display: block;
}
```

### Inline-Block

There's also a hybrid display value called `inline-block`. Elements with this display value:

- Flow with the text (like inline elements)
- Can have width and height set (like block elements)

```css
.inline-block-example {
    display: inline-block;
    width: 100px;
    height: 100px;
}
```

