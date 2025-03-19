const fs = require('fs');
const path = require('path');

// Read the Form.html file
const formHtml = fs.readFileSync(path.join(__dirname, '../public/Form.html'), 'utf8');

// Extract and remove link tags
const linkTags = formHtml.match(/<link[^>]*>/g) || [];
const withoutLinks = formHtml.replace(/<link[^>]*>/g, '');

// Extract and remove script tags
const scriptTags = formHtml.match(/<script[\s\S]*?<\/script>/g) || [];

// Keep track of script sources we've seen
const seenSources = new Set();
const uniqueScripts = scriptTags.filter(script => {
  const srcMatch = script.match(/src="([^"]+)"/);
  if (!srcMatch) return true; // Keep scripts without src
  
  const src = srcMatch[1];
  // Fix the path if needed
  const fixedScript = script.replace(/publicForm/, 'public/Form');
  
  // If we haven't seen this source before, keep it
  if (!seenSources.has(src)) {
    seenSources.add(src);
    return true;
  }
  return false;
}).map(script => script.replace(/publicForm/, 'public/Form'));

const withoutScripts = withoutLinks.replace(/<script[\s\S]*?<\/script>/g, '');

// Write the output files
fs.writeFileSync(path.join(__dirname, '../public/head.html'), linkTags.join('\n'));
fs.writeFileSync(path.join(__dirname, '../public/body.html'), uniqueScripts.join('\n'));
fs.writeFileSync(path.join(__dirname, '../public/Form.html'), withoutScripts);

console.log('Successfully split output into head.html, body.html, and Form.html'); 