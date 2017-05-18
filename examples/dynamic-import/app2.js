import PageA from './page-a';
import PageB from './page-b';

const pageC = require('./page-c').default;

window.onload = () => {
  const contents = document.getElementById('contents');

  function render(element) {
    contents.innerHTML = '';
    contents.appendChild(element);
  }

  const errorPage = document.createElement('h1');
  errorPage.innerText = 'Error occured';

  document.querySelector('#show-a').addEventListener('click', () => {
    render(pageA);
  });

  document.querySelector('#show-b').addEventListener('click', () => {
    render(pageB);
  });

  document.querySelector('#show-c').addEventListener('click', () => {
    const pageC = require('./page-c');
    render(pageC.default);
  });
};
