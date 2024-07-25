# random-pixel-avatar

A simple library to generate random symmetric pixel avatars.

## Installation

```bash
npm install random-pixel-avatar
```

```javascript
const { createAvatar } = require('random-pixel-avatar');

// Generate a 5x5 avatar with each pixel being 20x20 pixels
const dataUrl = createAvatar({
  size: 5,
  pixelSize: 20,
  baseColor?: "#FF0000",
  account?: ""
});

// Create an image element and set the src to the generated data URL
const img = new Image();
img.src = dataUrl;
document.body.appendChild(img);
```