import React from 'react';
import ReactDOM from 'react-dom';

import './hoge';

import('./component').then(Component => {
  ReactDOM.render(<Component />, document.getElementById('app'));
});
