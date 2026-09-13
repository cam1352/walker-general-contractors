const https = require('https');

https.get('https://walkergeneralcontractors.ca/', {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Find logo image tags
    const logos = [...data.matchAll(/<img[^>]+(?:logo|header|brand)[^>]+>/gi)];
    const srcMatches = [...data.matchAll(/src="([^"]+wp-content\/uploads[^"]+)"/gi)];
    
    console.log('--- LOGO & BRAND IMAGE URLS ---');
    logos.forEach(l => console.log(l[0]));
    console.log('\n--- UPLOADED IMAGES ---');
    srcMatches.slice(0, 10).forEach(s => console.log(s[1]));
    
    // Find style color hex codes
    const hexes = [...new Set(data.match(/#[0-9a-fA-F]{3,6}/g))];
    console.log('\n--- BRAND HEX COLORS FOUND ON SITE ---');
    console.log(hexes);
  });
}).on('error', err => console.error(err));
