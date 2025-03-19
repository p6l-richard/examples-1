const fs = require('fs');
const path = require('path');

// Read the Form.html file
const htmlPath = path.join(__dirname, '../public/Form.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Extract and remove links
const links = html.match(/<link[^>]*>/g) || [];
links.forEach(link => {
  html = html.replace(link, '');
});

// Extract and remove scripts
const scripts = html.match(/<script[\s\S]*?<\/script>/g) || [];
scripts.forEach(script => {
  html = html.replace(script, '');
});

// Write the files
fs.writeFileSync(
  path.join(__dirname, '../public/head.html'),
  links.join('\n')
);

fs.writeFileSync(
  path.join(__dirname, '../public/body.html'),
  scripts.join('\n')
);

// Whatever remains is our form content
fs.writeFileSync(
  path.join(__dirname, '../public/Form.html'), 
  html.trim()
);

console.log('Successfully split output into head.html, body.html, and Form.html'); 