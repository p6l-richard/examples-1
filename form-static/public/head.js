export default function injectHead() {
    const head = document.head;
    const publicUrl = 'https://p6l-richard.github.io/examples-1/form-static/public';
    head.insertAdjacentHTML('beforeend', `
      <link rel="stylesheet" href="${publicUrl}/Form.4a3e2ace.css">
    `);
  }