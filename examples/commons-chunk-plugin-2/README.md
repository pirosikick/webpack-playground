# CommonsChukPluginを使ったサンプル（分割するモジュールを明示的に指定）

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

- build以下に、a.bundle.jsとvendor.jsが出力します.
- webpack実行後にindex.htmlをブラウザで開くと動作確認できます。
- a.bundle.jsを見ると、react, react-domのコードが含まれないことが確認できます。
