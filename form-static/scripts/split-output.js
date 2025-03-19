const fs = require('fs');
const path = require('path');

// Read the Form.html file
const htmlPath = path.join(__dirname, '../dist/Form.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Extract parts using regex
const headLinks = html.match(/<link[^>]*>/g) || [];
const bodyScripts = html.match(/<script[\s\S]*?<\/script>/g) || [];
const divContent = html.match(/<div class="form-widget"[\s\S]*?<\/div>/i)?.[0] || '';

// Write head.html
fs.writeFileSync(
  path.join(__dirname, '../dist/head.html'),
  headLinks.join('\n')
);

// Write body.html
fs.writeFileSync(
  path.join(__dirname, '../dist/body.html'),
  bodyScripts.join('\n')
);

// Overwrite Form.html (just the widget content)
fs.writeFileSync(
  path.join(__dirname, '../dist/Form.html'), 
  divContent
);

console.log('Successfully split output into head.html, body.html, and Form.html'); 