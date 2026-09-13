const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('Walker-logo.png');

// Find IDAT chunks
let pos = 8;
const idatChunks = [];
let width = 0, height = 0;

while (pos < buf.length) {
  const len = buf.readUInt32BE(pos);
  const type = buf.toString('ascii', pos + 4, pos + 8);
  if (type === 'IHDR') {
    width = buf.readUInt32BE(pos + 8);
    height = buf.readUInt32BE(pos + 12);
  }
  if (type === 'IDAT') {
    idatChunks.push(buf.slice(pos + 8, pos + 8 + len));
  }
  pos += 12 + len;
}

console.log(`Image dimensions: ${width}x${height}`);
const compressed = Buffer.concat(idatChunks);

try {
  const decompressed = zlib.inflateSync(compressed);
  const colorMap = {};
  
  // PNG RGBA bytes (4 bytes per pixel + 1 filter byte per line)
  const bytesPerPixel = 4;
  const stride = width * bytesPerPixel + 1;
  
  for (let y = 0; y < height; y++) {
    const lineStart = y * stride + 1;
    for (let x = 0; x < width; x++) {
      const idx = lineStart + x * bytesPerPixel;
      const r = decompressed[idx];
      const g = decompressed[idx + 1];
      const b = decompressed[idx + 2];
      const a = decompressed[idx + 3];

      // Ignore transparent or fully white background pixels
      if (a > 50 && !(r > 240 && g > 240 && b > 240)) {
        const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        colorMap[hex] = (colorMap[hex] || 0) + 1;
      }
    }
  }

  const sortedColors = Object.entries(colorMap).sort((a, b) => b[1] - a[1]);
  console.log('--- DOMINANT LOGO COLORS (HEX) ---');
  sortedColors.slice(0, 15).forEach(([hex, count]) => {
    console.log(`${hex} -> ${count} pixels`);
  });

} catch (err) {
  console.error('Error decompressing PNG:', err);
}
