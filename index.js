const { createCanvas } = require("canvas/browser");

function generateSymmetricAvatar(size, baseColor) {
  const halfSize = Math.ceil(size / 2);
  const pixels = [];
  const deepColor = baseColor || getRandomColor();
  for (let y = 0; y < size; y++) {
    const row = [];
    for (let x = 0; x < halfSize; x++) {
      const color = Math.random() > 0.5 ? deepColor : "rgba(255,255,255,0)";
      row.push(color);
    }
    pixels.push(row);
  }

  for (let y = 0; y < size; y++) {
    for (let x = halfSize; x < size; x++) {
      pixels[y][x] = pixels[y][size - x - 1];
    }
  }

  return pixels;
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function getAccount(account) {
  if(!localStorage) return null;
  return localStorage.getItem(`__avatar_${account}`);
}

function setAccount(account, avatar) {
  if(!localStorage) return;
  localStorage.setItem(`__avatar_${account}`, avatar);
}

function createAvatar({ size, pixelSize, baseColor = null, account }) {
  if (account && getAccount(account)) {
    return getAccount(account);
  }
  const canvas = createCanvas(size * pixelSize, size * pixelSize);
  const context = canvas.getContext("2d");
  const pixels = generateSymmetricAvatar(size, baseColor);

  for (let y = 0; y < pixels.length; y++) {
    for (let x = 0; x < pixels[y].length; x++) {
      context.fillStyle = pixels[y][x];
      context.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    }
  }
  const avatar = canvas.toDataURL();
  account && setAccount(account, avatar);

  return avatar;
}

module.exports = {
  createAvatar
};
