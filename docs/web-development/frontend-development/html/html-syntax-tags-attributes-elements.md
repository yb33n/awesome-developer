---
sidebar_position: 2
---

# HTML Syntax: Tags, Attributes, and Elements

HTML (Hypertext Markup Language) is built on three core concepts: **tags**, **attributes**, and **elements**.

## Tags

Tags are markup codes that define the structure and purpose of content in an HTML document.

- Enclosed in angle brackets: `< >`
- Usually come in pairs: opening tag and closing tag
- Closing tags include a forward slash: `</>`

Examples:
- Opening tag: `<p>`
- Closing tag: `</p>`
- Self-closing tag: `<img>` or `<br>`
- Syntax: `<tagname>content</tagname>`

## Attributes

Attributes provide additional information about HTML elements.

- Specified in the opening tag
- Syntax: Come in name/value pairs: `name="value"`
- Common attributes (id, class, style)
- Boolean attributes

```html
<img src="image.jpg" alt="A beautiful landscape">
```
Here, `src` and `alt` are attributes of the `<img>` tag.

## Elements

An element is the complete unit of content in an HTML document.

Components of an element:
- Opening tag
- Attributes (if any)
- Content
- Closing tag

```html
<p class="intro">This is a paragraph.</p>
```
Here defines a paragraph element.
