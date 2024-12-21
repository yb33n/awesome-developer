---
sidebar_position: 1
---

# CSS Brief Introduction

## What is CSS?

CSS stands for **Cascading Style Sheets**. It is a styling language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

## Why Use CSS?

CSS allows web developers to:

1. Separate content from design
2. Create consistent styling across multiple pages
3. Easily make site-wide changes
4. Improve page load times
5. Enhance accessibility

## Basic CSS Syntax

CSS consists of selectors and declarations:

```css
selector {
  property: value;
}
```

- **Selector**: Targets the HTML element(s) to style
- **Property**: The attribute you want to change
- **Value**: The setting you want to apply to the property

## Ways to Include CSS

There are three main ways to include CSS in your HTML:

1. **Inline CSS**: Applied directly to individual HTML elements

   Example:
   ```html
   <p style="color: blue; font-size: 16px;">This is a blue paragraph.</p>
   ```

2. **Internal CSS**: Placed in the `<style>` tag in the HTML `<head>`

   Example:
   ```html
   <head>
     <style>
       p {
         color: blue;
         font-size: 16px;
       }
     </style>
   </head>
   <body>
     <p>This is a blue paragraph.</p>
   </body>
   ```

3. **External CSS**: Linked to the HTML file using the `<link>` tag

   Example:

   In your HTML file (e.g., index.html):
   ```html
   <head>
     <link rel="stylesheet" href="styles.css">
   </head>
   <body>
     <p>This is a blue paragraph.</p>
   </body>
   ```

   In your CSS file (styles.css):
   ```css
   p {
     color: blue;
     font-size: 16px;
   }
   ```

Each method has its use cases, but external CSS is generally preferred for larger projects as it promotes better organization and reusability of styles.

## Basic Selectors

- **Element Selector**: Selects all instances of a specific HTML element

  Example:
  ```css
  p {
    color: blue;
    font-size: 16px;
  }
  ```
  This will apply the styles to all `<p>` elements in the document.

- **Class Selector**: Selects elements with a specific class attribute

  Example:
  ```css
  .highlight {
    background-color: yellow;
    font-weight: bold;
  }
  ```
  This will apply the styles to any element with the class "highlight", like `<span class="highlight">` or `<div class="highlight">`.

- **ID Selector**: Selects a single element with a specific id attribute

  Example:
  ```css
  #header {
    background-color: black;
    color: white;
    padding: 10px;
  }
  ```
  This will apply the styles to the element with the id "header", such as `<div id="header">`.

- **Universal Selector**: Selects all elements

  Example:
  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```
  This applies the styles to every element in the document.

- **Attribute Selector**: Selects elements based on an attribute or attribute value

  Example:
  ```css
  input[type="text"] {
    border: 1px solid #ccc;
    padding: 5px;
  }
  ```
  This applies the styles to all `<input>` elements with the attribute `type="text"`, `<input type="text" />`

These basic selectors form the foundation of CSS selection, allowing you to target specific elements or groups of elements for styling.

## Conclusion

CSS is a powerful tool for controlling the layout and appearance of web pages. As you progress through this guide, you'll learn more advanced techniques and best practices for using CSS effectively.