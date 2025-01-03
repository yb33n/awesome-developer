---
sidebar_position: 1
---

# The `repeat()` Function in CSS

## Use in CSS Grid

- Commonly used in CSS Grid layouts
- Used with `grid-template-columns` and `grid-template-rows` properties

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```
- This creates a grid with three equal-width columns. The `repeat(3, 1fr)` is equivalent to writing `1fr 1fr 1fr`, which divides the available space into three equal parts.

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```
- `auto-fit` automatically determines the number of columns based on available space.
- `minmax(250px, 1fr)` sets each column to be at least 250px wide, but allows them to grow larger if space permits.
- The grid will adjust the number of columns as the container width changes, ensuring optimal layout across different screen sizes.
- On narrow screens, it might show one column, while on wider screens, it could display multiple columns.

## Use in CSS Gradients
- Can be used in `linear-gradient()` and `radial-gradient()` functions
- Repeats color stops in gradients

```css
.gradient {
  background: repeating-linear-gradient(45deg, 
              red, red 10px, blue 10px, blue 20px);
}
```
- This creates a striped diagonal background. The pattern (red for 10px, then blue for 10px) repeats infinitely at a 45-degree angle.

## Use in CSS Animations
- Used with the `@keyframes` rule
- Can repeat a set of keyframes

```css
@keyframes colorChange {
  0%, 33% { background-color: red; }
  33%, 66% { background-color: blue; }
  66%, 100% { background-color: green; }
}

.animated-element {
  animation: repeat(3, colorChange) 9s;
}
```
- This defines an animation that changes background color from red to blue to green. The `repeat(3, colorChange)` in the animation property makes this color change sequence repeat 3 times over 9 seconds.

## Use in CSS Transforms
- Can repeat transform functions in some browsers

```css
.transformed {
  transform: repeat(3, rotate(45deg) scale(0.5));
}
```
- This would apply the transformation sequence (rotate 45 degrees and scale to half size) three times to the element. However, note that this use is experimental and not widely supported.

## Browser Support

- Widely supported in modern browsers for Grid layouts
- Support may vary for other uses

## Key Points

- `repeat()` is versatile and used in various CSS contexts
- Its application in Grid layouts is well-established and widely supported
- Usage in other contexts (like gradients) is also valid and useful
- Always check browser compatibility for specific use cases
