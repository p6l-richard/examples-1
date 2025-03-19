const fs = require('fs');
const path = require('path');

// Read the Form.html file
const formHtml = fs.readFileSync(path.join(__dirname, '../public/Form.html'), 'utf8');

// Extract and remove link tags
const linkTags = formHtml.match(/<link[^>]*>/g) || [];
const withoutLinks = formHtml.replace(/<link[^>]*>/g, '');

// Extract and remove script tags
const scriptTags = formHtml.match(/<script[\s\S]*?<\/script>/g) || [];
const withoutScripts = withoutLinks.replace(/<script[\s\S]*?<\/script>/g, '');

// Write the output files
fs.writeFileSync(path.join(__dirname, '../public/head.html'), linkTags.join('\n'));
fs.writeFileSync(path.join(__dirname, '../public/body.html'), scriptTags.join('\n'));
fs.writeFileSync(path.join(__dirname, '../public/Form.html'), withoutScripts);

console.log('Successfully split output into head.html, body.html, and Form.html'); 