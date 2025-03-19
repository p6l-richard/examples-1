const fs = require('fs');
const path = require('path');

// Read the Form.html file
const htmlPath = path.join(__dirname, '../public/Form.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Extract parts using regex
const headContent = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] || '';
const bodyScripts = html.match(/<script[\s\S]*?<\/script>/g) || [];
const divContent = html.match(/<div class="form-widget"[\s\S]*?<\/div>/i)?.[0] || '';

// Write head.js
fs.writeFileSync(
  path.join(__dirname, '../public/head.js'),
  `export default function injectHead() {
    const head = document.head;
    const publicUrl = 'https://p6l-richard.github.io/examples-1/form-static/public';
    head.insertAdjacentHTML('beforeend', \`
      <link rel="stylesheet" href="\${publicUrl}/Form.4a3e2ace.css">
    \`);
  }`
);

// Write body.js
fs.writeFileSync(
  path.join(__dirname, '../public/body.js'),
  `export default function injectScripts() {
    const publicUrl = 'https://p6l-richard.github.io/examples-1/form-static/public';
    document.body.insertAdjacentHTML('beforeend', \`
      <script src="\${publicUrl}/Form.f4926498.js" type="module"></script>
      <script>(self.__FLIGHT_DATA ||= []).push("...")</script>
    \`);
  }`
);

// Write content.html
fs.writeFileSync(path.join(__dirname, '../public/content.html'), divContent);

console.log('Successfully split output into head.js, body.js, and content.html'); 