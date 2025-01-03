---
sidebar_position: 8
description: The `<details>` and `<summary>` elements are part of HTML5 and provide an easy way to create expandable and collapsible content sections on web pages. These elements are particularly useful for creating FAQ sections, accordions, or any content that needs to be hidden initially but can be revealed on user interaction.
---

# HTML Details and Summary Elements

The `<details>` and `<summary>` elements are part of HTML5 and provide an easy way to create expandable and collapsible content sections on web pages. These elements are particularly useful for creating FAQ sections, accordions, or any content that needs to be hidden initially but can be revealed on user interaction.

## The `<details>` Element

The `<details>` element is used to create a disclosure widget in which information is visible only when the widget is toggled into an "open" state.

### Syntax

```html
<details>
    <summary>Visible heading</summary>
    This content is hidden by default.
</details>
```

### Attributes

- `open`: When present, it specifies that the details should be visible (open) to the user

## The `<summary>` Element

The `<summary>` element specifies a summary, caption, or legend for a `<details>` element's disclosure box.

### Syntax

```html
<details>
    <summary>Click to expand</summary>
    Content goes here...
</details>
```

## Usage and Examples

### Basic Usage

```html
<details>
    <summary>What is HTML?</summary>
    <p>HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages.</p>
</details>
```

### Multiple Details Elements

```html
<details>
    <summary>Section 1</summary>
    <p>Content for section 1</p>
</details>

<details>
    <summary>Section 2</summary>
    <p>Content for section 2</p>
</details>
```

### Styling with CSS

You can style the `<details>` and `<summary>` elements using CSS:

```css
details {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: .5em .5em 0;
}

summary {
    font-weight: bold;
    margin: -.5em -.5em 0;
    padding: .5em;
}

details[open] {
    padding: .5em;
}

details[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: .5em;
}
```

## Browser Support

The `<details>` and `<summary>` elements are supported in most modern browsers, including:

- Chrome 12+
- Firefox 49+
- Safari 6+
- Edge 79+
- Opera 15+

Internet Explorer does not support these elements.

## Accessibility Considerations

- The `<details>` element is keyboard accessible by default.
- Screen readers announce the expanded/collapsed state of the widget.
- Use clear and descriptive text in the `<summary>` element to help users understand what information will be revealed.

## Best Practices

1. Use meaningful summary text that clearly indicates the content of the hidden section.
2. Avoid nesting `<details>` elements too deeply, as it can become confusing for users.
3. Consider using JavaScript to add more advanced functionality, such as remembering the open/closed state across page loads.
4. Use CSS to style the elements consistently with your website's design.

## Conclusion

The `<details>` and `<summary>` elements provide a native way to create expandable content sections in HTML. They offer good browser support, built-in accessibility features, and can be easily styled with CSS. When used appropriately, these elements can significantly improve the user experience by allowing users to focus on the content they're most interested in.