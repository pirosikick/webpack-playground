window.onload = () => {
  const contents = document.getElementById('contents');

  function render(element) {
    contents.innerHTML = '';
    contents.appendChild(element);
  }

  const errorPage = document.createElement('h1');
  errorPage.innerText = 'Error occured';

  document.querySelector('#show-a').addEventListener('click', () => {
    // page-a.jsとその依存関係は別ファイルに出力される
    import('./page-a').then(({ default: element }) => {
      // page-aが読み込まれたタイミングで実行
      render(element);
    }).catch(err => {
      // page-aの読み込みに失敗
      console.log(err);
      render(errorPage);
    });
  });

  document.querySelector('#show-b').addEventListener('click', () => {
    import('./page-b').then(({ default: element }) => {
      render(element);
    }).catch(err => {
      console.log(err);
      render(errorPage);
    });
  });

  document.querySelector('#show-c').addEventListener('click', () => {
    import('./page-c').then(({ default: element }) => {
      render(element);
    }).catch(err => {
      console.log(err);
      render(errorPage);
    });
  });
};
