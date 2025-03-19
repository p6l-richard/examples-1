const fs = require('fs');
const path = require('path');

// Read the Form.html file
const htmlPath = path.join(__dirname, '../public/Form.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Save original file
fs.writeFileSync(
  path.join(__dirname, '../public/Form.html.original'),
  html
);

// Extract parts using regex
const headLinks = html.match(/<link[^>]*>/g) || [];
const bodyScripts = html.match(/<script[\s\S]*?<\/script>/g) || [];

// Extract the form widget content with all its children
const formMatch = html.match(/<div class="form-widget"[\s\S]*?<form[\s\S]*?<\/form>[\s\S]*?<\/div>[\s\S]*?<\/div>/);
const divContent = formMatch ? formMatch[0] : '';

// Fix script URLs
const fixedBodyScripts = bodyScripts.map(script => 
  script.replace(/publicForm/g, 'public/Form')
);

// Write head.html
fs.writeFileSync(
  path.join(__dirname, '../public/head.html'),
  headLinks.join('\n')
);

// Write body.html
fs.writeFileSync(
  path.join(__dirname, '../public/body.html'),
  fixedBodyScripts.join('\n')
);

// Write Form.html (just the widget content)
fs.writeFileSync(
  path.join(__dirname, '../public/Form.html'), 
  divContent
);

console.log('Successfully split output into head.html, body.html, and Form.html'); 