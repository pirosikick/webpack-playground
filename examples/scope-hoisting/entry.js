import React from 'react';
import ReactDOM from 'react-dom';
import hello from './hello';

ReactDOM.render(
  React.createElement('h1', {}, 'Hello, World'),
  document.getElementById('app'),
  function () {
    hello();
  }
);
