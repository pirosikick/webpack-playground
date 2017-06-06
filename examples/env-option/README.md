# envオプションを使った設定ファイルのサンプル

## 最初の一度だけ実行

```console
# 依存関係のインストール
$ yarn install
```

## 実行

```console
# app.bundle.jsを出力
$ ./node_modules/.bin/webpack

# 圧縮されたapp.bundle.min.jsを出力
$ ./node_modules/.bin/webpack --env.target=production
```
