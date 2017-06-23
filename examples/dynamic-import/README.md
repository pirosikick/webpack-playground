# import関数を使ったモジュールの動的読み込みのサンプル

## 最初の一度だけ実行

```console
# 依存関係のインストール
$ yarn install
```

## 実行

```console
$ ./node_modules/.bin/webpack

# もしくは
$ yarn run webpack
```

- build以下にapp.bundle.js、page-a.chunk.js, page-b.chunk.js, page-c.chunk.jsを出力します。
- webpack2では、0~2.bundle.jsのような分かりにくい名前でしか出力できませんでしたが、`import(/* webpackChunkName: "page-a" */ './page-a')`のようにコメントを書くことで任意の名前を指定できるようになりました。
- webpack実行後、index.htmlをブラウザで開くと動作を確認できます。
- ブラウザの開発者ツールで、page-a.chunk.js, page-b.chunk.js, page-c.chunk.jsが遅れてロードされているのが確認できます。
