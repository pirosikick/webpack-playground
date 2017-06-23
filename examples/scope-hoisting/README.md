# webpack3のScope Hoistingのサンプル

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

- build以下にno-scope-hoisting.jsとscope-hoisting.js、それらを圧縮したno-scope-hositing.min.js, scope-hoisting.min.jsを出力します。
- 容量は微妙にですがscope-hoisting.min.jsの方が小さいです。大きいアプリケーションですと、もう少し差が出るかもでしれないです。
- no-scope-hoisting.jsとscope-hoisting.jsを見比べると、no-scope-hoisting.jsは各モジュール（entry.js, hello.js）を別々のスコープ（`(function(module, __webpack_exports__, __webpack_require__) { ...モジュールのコード... }`）に囲まれています。scope-hoisting.jsはentry.jsとhello.jsが同じスコープに定義されています。これが「スコープ巻き上げ」です。
- Scope Hoistingによって、実行速度の改善、出力ファイル容量の削減が期待できます。

