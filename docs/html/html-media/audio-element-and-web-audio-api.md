---
sidebar_position: 1
description: HTML provides the `<audio>` element to embed audio content in web pages. This element allows you to play audio files directly in the browser without the need for third-party plugins.
---

# The `<audio>` Element and Web Audio API

HTML provides the `<audio>` element to embed audio content in web pages. This element allows you to play audio files directly in the browser without the need for third-party plugins.

```html
    <audio controls src="audio.mp3" autoplay loop muted></audio>
```

And you can add a fallback content and audios for browsers that don't support the `<audio>` element:

```html
    <audio controls autoplay loop muted>
        <source src="audio.mp3" type="audio/mpeg">
        <source src="audio.ogg" type="audio/ogg">
        Your browser does not support the audio element.
    </audio>
```

## Key Attributes:

- `src`: Specifies the audio source
- `controls`: Displays audio controls (play, pause, volume, etc.)
- `autoplay`: Starts playing the audio automatically
- `loop`: Replays the audio when it ends
- `muted`: Mutes the audio output

## The Web Audio API

The Web Audio API provides a powerful and versatile system for controlling audio on the Web, allowing developers to choose audio sources, add effects to audio, create audio visualizations, apply spatial effects, and more.

### Creating an Audio Context

To start working with the Web Audio API:

```javascript
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
```

## Important Update: `createMediaElementSource()` Usage

To connect an `<audio>` element to the Web Audio API:

```javascript
const audioElement = document.querySelector('audio');
const source = audioContext.createMediaElementSource(audioElement);
source.connect(audioContext.destination);
```

This method allows you to manipulate the audio stream before it's played through the speakers.

## Combining `<audio>` and Web Audio API

When working with audio processing, you'll often use the `<audio>` element in conjunction with the Web Audio API. Here's how they work together:

1. Create an `<audio>` element in your HTML:

```html
<audio id="myAudio" src="sound.mp3" controls></audio>
```

2. Use the Web Audio API to process the audio:

```javascript
const audio = document.getElementById('myAudio');
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const source = audioContext.createMediaElementSource(audio);

// Create a gain node
const gainNode = audioContext.createGain();

// Connect the source to the gain node and the gain node to the destination
source.connect(gainNode);
gainNode.connect(audioContext.destination);

// Adjust the volume
gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
```

## Browser Compatibility and Best Practices

- Always check for browser support before using these APIs.
- Provide fallback content for browsers that don't support the `<audio>` element.
- Consider offering different audio formats for broader compatibility.
- Be mindful of autoplay policies, as many browsers restrict automatic audio playback.
- Use the Web Audio API for complex audio processing and the `<audio>` element for simple playback.
- Remember to handle user interactions to start audio contexts in browsers with autoplay restrictions.
