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

- build以下にapp.bundle.js、0~1.bundle.jsを出力します。
- webpack実行後、index.htmlをブラウザで開くと動作を確認できます。
- ブラウザの開発者ツールで、0~1.bundle.jsが遅れてロードされているのが確認できます。
