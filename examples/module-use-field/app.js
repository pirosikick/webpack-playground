import styles from './app.scss';

const h1 = document.createElement('h1');
h1.className = styles.hello;
h1.innerText = 'Hello, World!';

document.body.appendChild(h1);
