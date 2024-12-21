---
sidebar_position: 1
---

# Axis in Flexbox Layout and Alignment

## Basic Concepts

In Flexbox layout, there are two axes:
- Main Axis
- Cross Axis

The direction of these axes depends on the value of `flex-direction`.

## justify-content

1. **Purpose**: Aligns flex items along the main axis
2. **Application**: Applied to the flex container
3. **Common values**:
    - `flex-start` (default): Items are packed toward the start of the main axis
    - `flex-end`: Items are packed toward the end of the main axis
    - `center`: Items are centered along the main axis
    - `space-between`: Items are evenly distributed with the first item at the start and the last item at the end
    - `space-around`: Items are evenly distributed with equal space around them

## align-items

1. **Purpose**: Aligns flex items along the cross axis
2. **Application**: Applied to the flex container
3. **Common values**:
    - `stretch` (default): Items are stretched to fill the container
    - `flex-start`: Items are placed at the start of the cross axis
    - `flex-end`: Items are placed at the end of the cross axis
    - `center`: Items are centered along the cross axis
    - `baseline`: Items are aligned such that their baselines align

## Key Differences

1. **Axis of control**:
    - `justify-content` controls alignment on the main axis
    - `align-items` controls alignment on the cross axis

2. **Default values**:
    - `justify-content` defaults to `flex-start`
    - `align-items` defaults to `stretch`

3. **Available values**:
    - For example, `justify-content` has `space-between` and `space-around`, which `align-items` doesn't

## Example

Assuming `flex-direction: row;` (default)

```css
.container {
  display: flex;
  justify-content: center; /* Horizontal centering */
  align-items: center;     /* Vertical centering */
}
```

- This will center flex items both horizontally and vertically within the container

## Notes

- When `flex-direction` changes, the main and cross axes change accordingly
- For single-line flex containers, `align-items` controls how items stretch to fill the container's height
- For multi-line flex containers, `align-content` can be used to control alignment between lines
