---
sidebar_position: 6
description: The <html> element is the root element of an HTML page. It encapsulates all other elements and tells the browser that this is an HTML document.
---

# HTML Head: The Document Metadata, Scripts, and Styles

## The Root Element: `<html>`

The `<html>` element is the root element of an HTML page. It encapsulates all other elements and tells the browser that this is an HTML document.

```html
<html lang="en">
  <!-- All other elements go here -->
</html>
```

- The `lang` attribute specifies the language of the document.

## The Element: `<head>`

The `<head>` element represents a collection of metadata for the Document.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A comprehensive guide to HTML elements">
    <meta name="keywords" content="HTML, web development, tutorial">
    <meta name="author" content="beengo">
    <title>Comprehensive HTML Guide</title>
    <script>
        function greet() {
            alert('Hello, World!');
        }
    </script>
    <script src="path/to/script.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
    </style>
    <link rel="stylesheet" href="path/to/styles.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="alternate" href="https://example.com/fr/" hreflang="fr-FR">
</head>
<body>
<!-- Page content goes here -->
</body>
</html>
```

## HTML Meta Information

Meta tags provide metadata about the HTML document. They are used to specify character set, page description, keywords, author of the document, and viewport settings.

### Character Encoding

```html
<meta charset="UTF-8">
```

This declares the character encoding for the HTML document, ensuring proper text rendering.

### Viewport Settings

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This meta tag ensures proper rendering on mobile devices by setting the viewport width to the device width and initial zoom level.

### Description, Keywords and Author
```html
<meta name="description" content="A comprehensive guide to HTML elements">
<meta name="keywords" content="HTML, web development, tutorial">
<meta name="author" content="beego">
```

These meta tags help search engines understand and index your page content, and specifies the author of the web page.

## The Element: `<title>`

The `<title>` element specifies a title for the HTML page, which is shown in the browser's title bar or page's tab.

## The Element: `<script>`

The `<script>` element is used to embed or reference JavaScript code within an HTML document.

- Inline JavaScript:
```html
<script>
  // Your JavaScript code here
  function greet() {
    alert('Hello, World!');
  }
</script>
```

- External JavaScript:
```html
<script src="path/to/your/script.js"></script>
```

### Attributes of `<script>`

- `src`: Specifies the URL of an external script file.
- `type`: Specifies the MIME type of the script (default is "text/javascript").
- `async`: Script is downloaded asynchronously and executed as soon as it's available.
- `defer`: Script is downloaded asynchronously but executed only after the document has finished loading.


## The Element: `<style>`

The `<style>` element is used to define CSS styles directly within an HTML document.

### Attributes of `<style>`

- `type`: Specifies the MIME type of the style sheet (default is "text/css").
- `media`: Specifies on which media/device the styles should be applied.

## The Element: `<link>`

The `<link>` element defines the relationship between the current document and an external resource. It's most commonly used to link to external CSS files. You can also use it to link to favicon, alternate versions of the document, and more.

```html
    <link rel="stylesheet" href="path/to/styles.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="alternate" href="https://example.com/fr/" hreflang="fr-FR">
```

The address of the link(s) is given by the `href` attribute. If the href attribute is present, then its value must be a valid non-empty URL potentially surrounded by spaces. One or both of the `href` or `imagesrcset` attributes must be present.

If both the `href` and `imagesrcset` attributes are absent, then the element does not define a link.
