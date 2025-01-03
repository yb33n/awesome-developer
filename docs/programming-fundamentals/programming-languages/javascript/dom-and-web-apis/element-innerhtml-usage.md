---
sidebar_position: 1
description: The `innerHTML` is a property that gets or sets the HTML content inside an element.
---

# The innerHTML Property

`innerHTML` is a property that gets or sets the HTML content inside an element.

## Syntax
```javascript
// Get HTML content
let content = element.innerHTML;

// Set HTML content
element.innerHTML = newContent;
```

## Key Features
1. Parses and renders HTML tags
2. Can modify the HTML structure of an element
3. Slower performance due to HTML parsing
4. Potential security risk if used improperly (XSS vulnerability)
5. Will removes existing event listeners on parent element.

## Common Use Cases
1. Dynamically updating content with HTML
2. Creating complex HTML structures programmatically
3. Retrieving the HTML content of an element

## Examples

### Setting HTML content
```javascript
document.getElementById('myDiv').innerHTML = '<p>Hello <strong>World</strong>!</p>';
```

### Appending HTML content
```javascript
element.innerHTML += '<li>New item</li>';
```

### Reading HTML content
```javascript
let htmlContent = document.getElementById('myDiv').innerHTML;
console.log(htmlContent);
```

## Best Practices
1. Sanitize any user-generated content before using with `innerHTML`
2. Use `createElement()` and `appendChild()` for better performance when adding multiple elements
3. Consider using `insertAdjacentHTML()` for more precise insertion of HTML

## Security Considerations
- Be cautious when using `innerHTML` with user-input or external data to prevent XSS attacks
- Use content sanitization libraries when dealing with untrusted content

Remember, while `innerHTML` is powerful, it should be used judiciously, especially when dealing with dynamic or user-generated content.
