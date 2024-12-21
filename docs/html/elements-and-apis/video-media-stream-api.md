---
sidebar_position: 1
description: The `<video>` element is a core part of HTML5, allowing developers to easily embed video content without relying on third-party plugins.
---

# The `<video>` Element and Media Stream API

The `<video>` element is a core part of HTML5, allowing developers to easily embed video content without relying on third-party plugins.

Basic usage:

```html
<video src="movie.mp4" controls>
  Your browser does not support the video tag.
</video>
```

### Key Attributes:

- `src`: Specifies the video source
- `controls`: Displays video controls (play, pause, volume, etc.)
- `autoplay`: Starts playing the video automatically
- `loop`: Replays the video when it ends
- `muted`: Mutes the audio output

## The Media Stream API

The Media Stream API allows web applications to access media streams from the user's camera and microphone, enabling real-time video and audio applications directly in the browser.

### Accessing User Media

To access the user's camera:

```javascript
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    const videoElement = document.querySelector('video');
    videoElement.srcObject = stream;
  })
  .catch(error => {
    console.error('Error accessing the camera:', error);
  });
```

## Important Update: `createObjectURL()` Deprecation

Previously, developers would set the video source using:

> **createObjectURL() Overload resolution failed.**

```javascript
// video.src = window.URL.createObjectURL(stream);
```

However, this method has been deprecated. The modern and recommended approach is to directly assign the media stream to the `srcObject` property:

```javascript
video.srcObject = stream; // new implementation
```

This new implementation offers several advantages:
1. It's more performant, as it doesn't require creating and revoking object URLs.
2. It simplifies memory management.
3. It provides better compatibility with newer web standards and APIs.

## Combining `<video>` and Media Streams

When working with real-time video streams, you'll often use the `<video>` element to display the stream. Here's how they work together:

1. Create a `<video>` element in your HTML:

```html
<video id="myVideo" autoplay></video>
```

2. Use the Media Stream API to access the camera:

```javascript
const video = document.getElementById('myVideo');

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream; // Using the new implementation
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## Browser Compatibility and Best Practices

- Always check for browser support before using these APIs.
- Provide fallback content for browsers that don't support the `<video>` element.
- Request user permission before accessing their camera or microphone.
- Consider offering different video formats for broader compatibility.
- Use the `srcObject` property instead of `createObjectURL()` for better performance and compatibility.

