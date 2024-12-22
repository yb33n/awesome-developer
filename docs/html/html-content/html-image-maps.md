---
sidebar_position: 9
description: Image maps in HTML allow you to create clickable areas on an image, turning parts of the image into hyperlinks. This is achieved using the `<img>` element in conjunction with the `<map>` and `<area>` elements.
---

# HTML Image and Image Maps

Image maps in HTML allow you to create clickable areas on an image, turning parts of the image into hyperlinks. This is achieved using the `<img>` element in conjunction with the `<map>` and `<area>` elements.

## Basic Structure

The basic structure of an image map consists of three main parts:

1. An `<img>` element that displays the image
2. A `<map>` element that defines the map
3. `<area>` elements within the `<map>` that define clickable regions

```html
<img src="image.jpg" alt="Description" usemap="#mapname">

<map name="mapname">
  <area shape="shape" coords="coordinates" href="link.html" alt="Description">
</map>
```

## The `<img>` Element

The `<img>` element is used to embed the image on the web page.

### Key Attributes:

- `src`: Specifies the path to the image file
- `alt`: Provides alternative text for the image
- `width` and `height`: Define the dimensions of the image
- `usemap`: References the `<map>` element by its name

Example:
```html
<img src="world-map.jpg" alt="World Map" usemap="#worldmap">
```

### Responsive Images

For responsive design, use percentage values for `width` and `height` attributes or CSS to control image size.

Example:
```html
<img src="world-map.jpg" alt="World Map" usemap="#worldmap" style="width: 100%;">
```

### Object fit Property

The `object-fit` CSS property can be used to control how the image is resized within its container.

Example:
```css
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

`object-fit: cover` will ensure that the image covers the entire container, **cropping** it if necessary.

## The `<map>` Element

The `<map>` element is used to define an image map.

### Key Attribute:

- `name`: Specifies a name for the map, which is referenced by the `usemap` attribute of the `<img>` element

Example:
```html
<map name="worldmap">
  <!-- Area elements go here -->
</map>
```

## The `<area>` Element

The `<area>` element defines a clickable area inside an image map.

### Key Attributes:

- `shape`: Specifies the shape of the area (rect, circle, poly)
- `coords`: Defines the coordinates of the area
- `href`: Specifies the URL to go to when the area is clicked
- `alt`: Provides alternative text for the area

Example:
```html
<area shape="rect" coords="34,44,270,350" href="europe.html" alt="Europe">
```

## Shape Types and Coordinates

1. **Rectangle (rect)**
    - Coordinates: x1,y1,x2,y2
    - Example: `<area shape="rect" coords="34,44,270,350" href="link.html" alt="Rectangle">`

2. **Circle (circle)**
    - Coordinates: x,y,radius
    - Example: `<area shape="circle" coords="125,125,75" href="link.html" alt="Circle">`

3. **Polygon (poly)**
    - Coordinates: x1,y1,x2,y2,...,xn,yn
    - Example: `<area shape="poly" coords="140,121,181,116,204,160,204,222,191,270,140,329,85,355,58,352,37,322,40,259,103,161,128,147" href="link.html" alt="Polygon">`

## Complete Example

```html
<img src="solar-system.jpg" alt="Solar System" usemap="#planetmap">

<map name="planetmap">
  <area shape="rect" coords="0,0,82,126" href="sun.html" alt="Sun">
  <area shape="circle" coords="90,58,3" href="mercury.html" alt="Mercury">
  <area shape="circle" coords="124,58,8" href="venus.html" alt="Venus">
</map>
```

## Styling Image Maps

While you can't directly style `<area>` elements with CSS, you can use JavaScript to add visual feedback:

```javascript
const areas = document.querySelectorAll('area');

areas.forEach(area => {
  area.addEventListener('mouseover', () => {
    // Add visual feedback
  });
  area.addEventListener('mouseout', () => {
    // Remove visual feedback
  });
});
```

## Accessibility Considerations

1. Always provide meaningful `alt` attributes for both the `<img>` and `<area>` elements.
2. Consider providing a text alternative or description of the image map for screen reader users.
3. Ensure that all interactive areas are keyboard accessible.

## Responsive Image Maps

Image maps are not naturally responsive. For responsive designs, consider:

1. Using percentage values for coordinates
2. Implementing a JavaScript solution to recalculate coordinates based on image size
3. Using SVG instead of bitmap images for scalability

## Best Practices

1. Use clear and precise coordinates for accurate mapping.
2. Provide alternative navigation methods alongside image maps.
3. Test thoroughly across different browsers and devices.
4. Consider usability on touch devices where hover states are not applicable.

## Browser Support

Image maps are supported in all modern browsers, including older versions of Internet Explorer.

## Conclusion

HTML image maps, created using the `<img>`, `<map>`, and `<area>` elements, provide an interactive way to create clickable regions on images. While they have some limitations in terms of responsiveness and styling, they can be useful for certain types of content, such as geographic maps or diagrams. When implementing image maps, always consider accessibility and provide alternative means of accessing the same information for users who may have difficulty interacting with the image map.