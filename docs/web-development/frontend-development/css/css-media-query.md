---
sidebar_position: 9
---

# CSS Media Query and Responsive Styles

## Basic Structure

```css
@media (max-width: 600px) {
    /* Style rules */
    nav ul {
        flex-direction: column;
        align-items: center;
    }

    nav li {
        margin-bottom: 10px;
    }
}
```

## Detailed Explanation

1. **Media Query**:
    - `@media` declares the start of a media query.
    - `(max-width: 600px)` is the query condition, applying the internal styles when the viewport width is 600px or less.

2. **Application**:
    - Typically used for responsive design, adjusting layouts for small-screen devices like phones.

3. **Specific Style Rules**:

   ```css
   nav ul {
       flex-direction: column;
       align-items: center;
   }
   ```
    - When screen width ≤ 600px, the `<ul>` element in the navigation changes its flex layout.
    - `flex-direction: column;` vertically aligns flex items (usually `<li>` elements).
    - `align-items: center;` centers these items on the cross-axis (horizontally in this case).

   ```css
   nav li {
       margin-bottom: 10px;
   }
   ```
    - Adds bottom margin to each `<li>` element in the navigation, increasing vertical spacing.

## Effect

- On screens wider than 600px, the navigation menu might be horizontally aligned.
- When the screen width reduces to 600px or less:
    1. Navigation menu items align vertically.
    2. Menu items are horizontally centered.
    3. Each menu item has 10px vertical spacing between them.

## Purpose

- Improves usability and navigation on small-screen devices.
- Prevents horizontal scrolling or content squeezing on small screens.

## Considerations

- 600px is a common breakpoint, but should be adjusted based on design requirements.
- Ensure testing of layout effects across different screen sizes.
- Consider adding other breakpoints to accommodate more device types.

This media query exemplifies responsive design, ensuring a good user experience across various devices.
