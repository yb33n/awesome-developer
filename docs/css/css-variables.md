---
sidebar_position: 7
---

# CSS Variables

CSS Variables, also known as CSS Custom Properties, are entities that contain specific values to be reused throughout a document. They allow you to store specific values in one place and reuse them throughout your stylesheets, making your CSS more efficient, maintainable, and dynamic.

## Syntax and Basic Usage

### Declaring CSS Variables

CSS Variables are declared using a double dash (--) prefix:

```css
:root {
  --main-color: #3498db;
  --font-size: 16px;
  --margin: 20px;
}
```

### Using CSS Variables

To use a CSS variable, you use the `var()` function:

```css
.button {
  background-color: var(--main-color);
  font-size: var(--font-size);
  margin: var(--margin);
}
```

## Scope and the Cascade

### Global Scope

Variables declared in the `:root` pseudo-class have a global scope:

```css
:root {
  --global-color: #333;
}

body {
  color: var(--global-color);
}
```

### Local Scope

Variables can also be scoped to specific elements:

```css
.container {
  --local-padding: 15px;
  padding: var(--local-padding);
}
```

### Cascading and Inheritance

CSS Variables follow the normal cascading rules of CSS:

```css
:root {
  --color: blue;
}

.parent {
  --color: green;
}

.child {
  color: var(--color); /* This will be green */
}
```

## Fallback Values

You can provide fallback values in case a variable is not defined:

```css
.element {
  color: var(--undefined-color, black);
}
```

## Combining with Calc()

CSS Variables can be used within the `calc()` function:

```css
:root {
  --spacing: 10px;
}

.element {
  margin: calc(var(--spacing) * 2);
}
```

## Responsive Design with CSS Variables

CSS Variables can be particularly useful in creating responsive designs:

```css
:root {
  --container-width: 1200px;
}

@media (max-width: 1200px) {
  :root {
    --container-width: 992px;
  }
}

@media (max-width: 992px) {
  :root {
    --container-width: 768px;
  }
}

.container {
  max-width: var(--container-width);
}
```

## JavaScript Interaction

CSS Variables can be accessed and modified via JavaScript:

```javascript
// Get the value of a CSS variable
let rootStyles = getComputedStyle(document.documentElement);
let mainColor = rootStyles.getPropertyValue('--main-color');

// Set the value of a CSS variable
document.documentElement.style.setProperty('--main-color', '#ff0000');
```

## Browser Support and Fallbacks

CSS Variables are supported in all modern browsers. For older browsers, you can provide fallbacks:

```css
.element {
  color: blue; /* Fallback for browsers that don't support CSS variables */
  color: var(--main-color);
}
```

## Best Practices and Use Cases

### 1. Theming

CSS Variables are excellent for implementing theme systems:

```css
.light-theme {
  --bg-color: #ffffff;
  --text-color: #333333;
}

.dark-theme {
  --bg-color: #333333;
  --text-color: #ffffff;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

### 2. Component-Based Design

Use CSS Variables to create flexible, reusable components:

```css
.button {
  --button-color: blue;
  background-color: var(--button-color);
}

.button-danger {
  --button-color: red;
}
```

### 3. Responsive Typography

Implement responsive typography easily:

```css
:root {
  --font-size-base: 16px;
}

@media (min-width: 768px) {
  :root {
    --font-size-base: 18px;
  }
}

body {
  font-size: var(--font-size-base);
}
```

### 4. Managing Z-index

Use CSS Variables to manage z-index values:

```css
:root {
  --z-header: 100;
  --z-modal: 200;
}

.header {
  z-index: var(--z-header);
}

.modal {
  z-index: var(--z-modal);
}
```

## Performance Considerations

- CSS Variables are resolved at runtime, which can have a slight performance impact compared to static values.
- For frequently animated properties, consider using static values for better performance.

## Debugging

Most browser developer tools support inspecting and modifying CSS Variables, making debugging easier.
