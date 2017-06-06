# externalsフィールドを使ったファイル分割のサンプル

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

- no-externals.jsとexternals.jsが出力されます。
- webpack実行後に、index.htmlをブラウザで開くと挙動を確認できます。
- no-externals.jsとexternals.jsは同じエントリポイントですが、externals.jsは'react', 'jquery'を外部から参照しているので容量がかなり小さいです。
