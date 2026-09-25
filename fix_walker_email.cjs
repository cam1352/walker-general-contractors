const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    content = content.replace(/kyle@walkergeneralcontractors\.ca/g, 'info@walkergeneralcontractors.ca');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
  } catch(e) {}
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!['.git', 'node_modules', '.vercel', '.netlify', 'dist'].includes(file)) {
        walkDir(fullPath);
      }
    } else {
      if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.html')) {
        replaceInFile(fullPath);
      }
    }
  }
}

walkDir(path.join(__dirname, 'src'));
console.log("Updated FormSubmit email address to info@...");
