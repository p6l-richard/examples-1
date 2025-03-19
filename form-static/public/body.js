export default function injectScripts() {
    const publicUrl = 'https://p6l-richard.github.io/examples-1/form-static/public';
    document.body.insertAdjacentHTML('beforeend', `
      <script src="${publicUrl}/Form.f4926498.js" type="module"></script>
      <script>(self.__FLIGHT_DATA ||= []).push("...")</script>
    `);
  }