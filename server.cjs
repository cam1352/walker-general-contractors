const http = require('http');
const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function createServerInstance(port) {
  const server = http.createServer((req, res) => {
    let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
    
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(DIST_DIR, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.writeHead(200, { 
          'Content-Type': contentType, 
          'Access-Control-Allow-Origin': '*' 
        });
        res.end(content, 'utf-8');
      }
    });
  });

  server.listen(port, '0.0.0.0', () => {
    console.log(`WALKER CONTRACTORS SERVER ACTIVE ON PORT ${port}`);
  }).on('error', (err) => {
    console.log(`Port ${port} error: ${err.message}`);
  });
}

// Start on BOTH port 80 and port 3000 so both http://localhost and http://localhost:3000 work!
createServerInstance(80);
createServerInstance(3000);
