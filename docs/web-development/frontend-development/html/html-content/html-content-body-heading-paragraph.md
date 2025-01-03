---
sidebar_position: 1
---

# HTML Content: Body, Heading and Paragraph

The HTML **body** contains the main content of a web page. **Headings** and **Paragraphs** are fundamental elements that structure this content, providing hierarchy and organization to the information presented.

## HTML Body

The `<body>` element represents the content of an HTML document. All visible content such as headings, paragraphs, lists, links, and more are placed within the `<body>` tags.

```html
<body>
  <!-- All visible content goes here -->
</body>
```

## Headings

HTML provides six levels of headings, from `<h1>` to `<h6>`, with `<h1>` being the highest (most important) level and `<h6>` the lowest.

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
```

Headings are **block-level** elements. This means:

- They start on a new line
- They take up the full width available by default
- Browsers typically add margins before and after headings

## Paragraphs

The `<p>` element is used to define paragraphs.

```html
<p>This is a paragraph of text.</p>
```

Paragraphs act as the default **block-level** element.

### Usage and Best Practices:

#### Semantic Structure

Use `<p>` elements to group related sentences and thoughts.

#### Nesting

Paragraphs cannot contain other block-level elements, including other paragraphs.

#### Whitespace Handling

Browsers collapse multiple whitespace characters into a single space within paragraphs.
   ```html
    <p>
        This    paragraph    has    extra    spaces    but    will    render    normally.
    </p>
   ```
#### SEO Implications:
- Well-structured content with proper use of paragraphs can improve readability and potentially benefit SEO.
- Search engines may give more weight to text at the beginning of paragraphs, so consider placing important keywords there.
