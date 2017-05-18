import hello from './hello';

function render() {
  document.body.innerText = 'MR' + hello();
}
render();

// HMRが有効か判定
if (module.hot) {
  // このファイルと依存関係のHMRを許可
  module.hot.accept();
  // このファイルが再読込される時の処理
  module.hot.dispose(() => {
    document.body.innerText = '';
  });
}
