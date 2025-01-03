---
sidebar_position: 4
description: HTML element relationships, hierarchy, and the basic structure of an HTML document.
---

# HTML Structure and Hierarchy: Relationships Between Elements

```html
<div id="parent">
  <h1>Welcome to <span class="highlight">Our Website</span></h1>
  <p>We have <strong>amazing</strong> content for <em>you</em>.</p>
  <ul>
    <li>Item <a href="#">One</a></li>
    <li>Item <span style="color: red;">Two</span></li>
  </ul>
</div>
```

Now, let's explain the relationships and nesting:

1. **Block-level elements**:
    - `<div>`, `<h1>`, `<p>`, `<ul>`, and `<li>` are block-level elements.
2. **Inline elements**:
    - `<span>`, `<strong>`, `<em>`, and `<a>` are inline elements.
3. **Parent-Child relationships**:
    - The `<div>` is a parent to `<h1>`, `<p>`, and `<ul>`.
    - The `<h1>` is a parent to the nested `<span>`.
    - The `<p>` is a parent to the nested `<strong>` and `<em>`.
    - Each `<li>` is a parent to its nested inline element (`<a>` or `<span>`).
4. **Siblings**:
    - The `<h1>`, `<p>` and `<ul>` are siblings within the `<div>`.
    - The inline `<strong>` and `<em>` within the `<p>` are siblings.
5. **Ancestors and Descendants**:
    - The `<div>` is an ancestor to all nested elements, including both block-level and inline elements.
    - All elements within the `<div>` are descendants of the `<div>`, regardless of whether they are block-level or inline.

## Basic HTML Structure

Every HTML document follows a standard structure. Let's break down the essential components of an HTML document.

### 1. DOCTYPE Declaration

Every HTML5 document starts with a **DOCTYPE** declaration. This tells the browser that this is an HTML5 document.

```html
<!DOCTYPE html>
```

- It's not case-sensitive, but it's common practice to write it in uppercase.
- Unlike in older HTML versions, this declaration is simple and doesn't require a reference to a DTD (Document Type Definition).

### 2. HTML Root Element

The `<html>` element is the root element of an HTML page. All other elements must be descendants of this element.

```html
<html lang="en">
  <!-- Other elements go here -->
</html>
```

- The `lang` attribute specifies the language of the document. It's important for accessibility and search engines.

### 3. Head Section

The `<head>` element contains meta information about the HTML page.

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
</head>
```

Key elements within the `<head>`:

- `<meta charset="UTF-8">`: Specifies the character encoding for the document (typically UTF-8).
- `<meta name="viewport">`: Ensures proper rendering on mobile devices.
- `<title>`: Specifies a title for the page, which is shown in the browser's title bar or page's tab.

Other common elements in the `<head>`:
- `<link>`: to link to external stylesheets
- `<script>`: to include JavaScript files or code
- `<style>`: to include internal CSS

### 4. Body Section

The `<body>` element defines the document's body. It contains all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

```html
<body>
  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>
  <!-- More content goes here -->
</body>
```

### 5. Putting It All Together

Here's an example of a basic HTML5 document structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph on my web page.</p>
</body>
</html>
```

This structure provides the foundation upon which you'll build more complex web pages and applications. As you progress, you'll add more elements within this basic structure, but the core components outlined here will remain consistent across most HTML documents you create.
