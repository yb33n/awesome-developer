---
sidebar_position: 2
---

# HTML Text Formatting, Inline semantics

HTML provides several elements for formatting text within paragraphs or other content. These elements allow you to add emphasis, indicate importance, or apply specific styles to portions of your text.

## Escape HTML Entities

HTML entities are special characters used to represent reserved characters in HTML. They are essential for displaying characters that might otherwise be interpreted as HTML code.

### Common HTML Entities:
- Used to display special characters in HTML.
- Begin with an ampersand (&) and end with a semicolon (;).
- Can be represented by name or number.

1. Copyright symbol: `&copy;` or `&#169;`
   - Displays as: © or ©

2. Less than: `&lt;` or `&#60;`
   - Displays as: < or <

3. Greater than: `&gt;` or `&#62;`
   - Displays as: > or >

4. Ampersand: `&amp;` or `&#38;`
   - Displays as: & or &

5. Non-breaking space: `&nbsp;` or `&#160;`
   - Displays as: [invisible space] or [invisible space]

6. Euro sign: `&euro;` or `&#8364;`
   - Displays as: € or €

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

### 8. Definition: `<dfn>`
- Used to indicate the defining instance of a term in HTML.
- Often used with the `title` attribute for additional information.
- **Display**: Inline element

```html
<p>
    <dfn title="HyperText Markup Language">HTML</dfn> is the backbone of web content structure.
</p>
```

### 9. Abbreviation: `<abbr>`
- Represents an abbreviation or acronym.
- Commonly used with the `title` attribute to provide the full expansion.
- **Display**: Inline element

```html
<p>
    I work with <abbr title="Cascading Style Sheets">CSS</abbr> daily.
</p>
```

### 10. Code: `<code>`
- Used to display inline code snippets or computer code.
- Often used in technical documentation or programming tutorials.
- **Display**: Inline element

```html
<p>
    Use the <code>document.getElementById()</code> method to select an element by its ID in JavaScript.
</p>
```

### 11. Preformatted Text: `<pre>`
- Displays text exactly as written, preserving spaces and line breaks.
- Often used with `<code>` for displaying larger code snippets.
- **Display**: Block-level element

```html
<pre><code>
def greet(name):
    print(f"Hello, {name}!")

greet("World")
</code></pre>
```

Certainly! Here are some examples of combining these elements:

### 12. Combining Elements
- Elements can be used together for more specific purposes.
- Enhances semantic meaning and improves accessibility.
- **Display**: Varies based on elements used

```html
<p>The <dfn><abbr title="Document Object Model">DOM</abbr></dfn> is a programming interface for HTML and XML documents.</p>

<pre><code>
// Example JavaScript code
function <dfn>sayHello</dfn>(name) {
    console.log(`Hello, ${name}!`);
}
</code></pre>

<p>In <abbr title="Cascading Style Sheets">CSS</abbr>, the <code>display: flex;</code> property creates a flexible container.</p>
```

### 13. Line Break: `<br>`
- Represents a line break within text content. Useful for creating new lines without starting a new paragraph.

```html
<p>
    This is a line of text.<br>
    This is another line of text.
</p>
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
