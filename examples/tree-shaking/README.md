# Tree shakingのサンプル 

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

- 実行後、normal.jsとtree-shaking.jsを出力します。
- 同じエントリポイントですが、Tree Shakingが有効になっているtree-shaking.jsの方が、容量が軽いことに注目してください。

