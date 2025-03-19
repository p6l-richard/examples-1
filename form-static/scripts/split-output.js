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

// Extract scripts, ensuring we only get unique ones and fix URLs
const scriptMatches = html.match(/<script[\s\S]*?<\/script>/g) || [];
const flightDataScript = scriptMatches.find(script => script.includes('__FLIGHT_DATA')) || '';
const moduleScript = `<script type="module" async src="https://p6l-richard.github.io/examples-1/form-static/public/Form.f4926498.js"></script>`;

// Extract the form widget content with all its children
const formMatch = html.match(/<div class="form-widget"[\s\S]*?<form[\s\S]*?<\/form>[\s\S]*?<\/div>[\s\S]*?<\/div>/);
const divContent = formMatch ? formMatch[0] : '';

// Write head.html
fs.writeFileSync(
  path.join(__dirname, '../public/head.html'),
  headLinks.join('\n')
);

// Write body.html with only necessary scripts
fs.writeFileSync(
  path.join(__dirname, '../public/body.html'),
  moduleScript + '\n' + flightDataScript
);

// Write Form.html (just the widget content)
fs.writeFileSync(
  path.join(__dirname, '../public/Form.html'), 
  divContent
);

console.log('Successfully split output into head.html, body.html, and Form.html'); 