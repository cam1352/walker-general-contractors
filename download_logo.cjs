const https = require('https');
const fs = require('fs');

const file = fs.createWriteStream('Walker-logo.png');
https.get('https://walkergeneralcontractors.ca/wp-content/uploads/2026/03/Walker-logo.png', (res) => {
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Walker-logo.png downloaded successfully!');
    console.log('File size:', fs.statSync('Walker-logo.png').size, 'bytes');
  });
});
