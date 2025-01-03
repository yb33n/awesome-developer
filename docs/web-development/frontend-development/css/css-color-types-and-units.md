---
sidebar_position: 4
---

# CSS Color Types and Units

Colors are a fundamental aspect of web design. In CSS, there are several ways to specify colors, each with its own advantages.

## Color Types and Units

### 1. Keyword Colors

CSS provides a set of predefined color keywords.

```css
p {
  color: red;
}

div {
  background-color: skyblue;
}
```

Common color keywords include: `black`, `white`, `red`, `green`, `blue`, `yellow`, `purple`, `gray`, etc.

### 2. Hexadecimal Colors

A six-digit code representing RGB values, preceded by a `#`.

```css
h1 {
  color: #FF0000; /* Red */
}

.highlight {
  background-color: #00FF00; /* Green */
}
```

Each pair of digits represents the intensity of red, green, and blue respectively, ranging from 00 (no intensity) to FF (full intensity).

### 3. RGB and RGBA

RGB stands for Red, Green, Blue. Each value ranges from 0 to 255.

```css
.rgb-example {
  color: rgb(255, 0, 0); /* Red */
}
```

RGBA adds an Alpha channel for opacity, ranging from 0 (fully transparent) to 1 (fully opaque).

```css
.rgba-example {
  background-color: rgba(0, 0, 255, 0.5); /* Semi-transparent blue */
}
```

### 4. HSL and HSLA

HSL stands for Hue, Saturation, Lightness.
- Hue is a degree on the color wheel (0 to 360)
- Saturation is a percentage value (0% to 100%)
- Lightness is also a percentage (0% is black, 100% is white)

```css
.hsl-example {
  color: hsl(0, 100%, 50%); /* Red */
}
```

HSLA adds an Alpha channel for opacity, similar to RGBA.

```css
.hsla-example {
  background-color: hsla(120, 100%, 50%, 0.3); /* Semi-transparent green */
}
```

## Choosing Between Color Types

1. **Keyword Colors**: Easy to remember and use, but limited in range.
2. **Hexadecimal**: Widely supported and compact, but can be hard to read.
3. **RGB/RGBA**: Intuitive if you're familiar with RGB color mixing, and allows for alpha transparency.
4. **HSL/HSLA**: More intuitive for adjusting colors (e.g., lightening, darkening, or adjusting saturation), and also allows for alpha transparency.

## Example Usage

```css
body {
  background-color: #f0f0f0; /* Light gray */
}

h1 {
  color: rgb(0, 102, 204); /* Blue */
}

p {
  color: hsl(0, 0%, 20%); /* Dark gray */
}

.highlight {
  background-color: rgba(255, 255, 0, 0.5); /* Semi-transparent yellow */
}
```
