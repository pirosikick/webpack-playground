# module-use-field

## 最初の一度だけ実行

```console
# 依存関係のインストール
$ yarn install
```

## 実行

```console
$ ./node_modules/webpack

# もしくは
$ yarn run webpack
```

- app.bundle.jsが出力されます。
- webpack実行後にindex.htmlを開くと動作を確認できます。
- app.js内でscssのファイルを読み込んでいますが、style-loader, css-loader, sass-loaderがJavaScriptに変換しています。
