const fs = require('fs');

// Simple PNG chunk reader to extract PLTE or IDAT raw colors
const buf = fs.readFileSync('Walker-logo.png');

console.log('PNG Header:', buf.toString('ascii', 0, 8));

// Check if PLTE palette exists
let plteIdx = buf.indexOf('PLTE');
if (plteIdx !== -1) {
  const len = buf.readUInt32BE(plteIdx - 4);
  console.log('Found PLTE palette with length:', len);
  const palette = [];
  for (let i = 0; i < len; i += 3) {
    const r = buf[plteIdx + 4 + i].toString(16).padStart(2, '0');
    const g = buf[plteIdx + 4 + i + 1].toString(16).padStart(2, '0');
    const b = buf[plteIdx + 4 + i + 2].toString(16).padStart(2, '0');
    palette.push(`#${r}${g}${b}`);
  }
  console.log('PLTE Palette Colors:', palette);
} else {
  console.log('No PLTE chunk found (RGBA / Truecolor PNG). Checking text chunks or site CSS...');
}
