# CommonsChukPluginを使ったサンプル



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

- a.bundle.js, b.bundle.js, c.bundle.jsと、commons.jsが出力されます。
- webpackを実行後、index.htmlをブラウザで開くと、entry-a.jsの動作を確認できます。
- 出力ファイルを見ると、entry-a.js, entry-b.js, entry-c.jsが共通で利用しているhello.jsの実装が、a.bundle.js, b.bundle.js, c.bundle.jsには含まれず、commons.jsに含まれているのが確認できます。

