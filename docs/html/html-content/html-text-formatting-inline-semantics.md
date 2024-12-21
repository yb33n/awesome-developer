---
sidebar_position: 2
---

# HTML Text Formatting, Inline semantics

HTML provides several elements for formatting text within paragraphs or other content. These elements allow you to add emphasis, indicate importance, or apply specific styles to portions of your text.

## Common Text Formatting Elements

### 1. Strong Importance: `<strong>`
- Indicates strong importance, seriousness, or urgency.
- Typically rendered in bold by browsers.
- **Display**: Inline element

```html
    <p>
        This is <strong>very important</strong> information.
    </p>
```

### 2. Emphasis: `<em>`
- Indicates emphasis or stress.
- Typically rendered in italics by browsers.
- **Display**: Inline element

```html
    <p>
        This is an <em>emphasized</em> point.
    </p>
```

### 3. Underline: `<u>`
- Represents text that should be stylistically different from normal text.
- Typically rendered with an underline.
- Use cautiously as it can be confused with hyperlinks.
- **Display**: Inline element

```html
    <p>
        This is an <u>underlined</u> word for stylistic purposes.
    </p>
```

### 4. Strikethrough: `<s>`
- Represents text that is no longer accurate or relevant.
- Typically rendered with a line through the text.
- **Display**: Inline element

```html
   <p>
        The meeting is on <s>Tuesday</s> Wednesday.
    </p>
```

## Additional Text Formatting Elements

### 5. Mark: `<mark>`
- Represents text that is highlighted for reference purposes.
- Typically rendered with a yellow background.
- **Display**: Inline element

```html
    <p>
        The most <mark>important point</mark> to remember is...
    </p>
```

### 6. Small: `<small>`
- Represents side-comments and small print.
- Typically rendered in a smaller font size.
- **Display**: Inline element

```html
    <p>
       Terms and conditions apply. <small>See website for details.</small>
    </p>
```

### 7. Subscript and Superscript: `<sub>` and `<sup>`
- Used for typographical conventions or mathematical expressions.
- **Display**: Inline elements

```html
<p>The chemical formula for water is H<sub>2</sub>O.</p>
<p>The area of a circle is πr<sup>2</sup>.</p>
```

## Best Practices and Considerations

### 1. Semantic Usage:
Use these elements for their semantic meaning, not just for visual styling.

### 2. Accessibility:
- Screen readers may interpret these elements differently, so use them appropriately.
- Avoid using `<u>` for links, as it can confuse users.

### 3. Combining Elements:
You can nest formatting elements for combined effects.

```html
    <p>
        This is <strong><em>very important and emphasized</em></strong> text.
    </p>
```

### 4. Overuse:
Avoid overusing text formatting, as it can make content harder to read.
