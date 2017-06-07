# performanceフィールドのサンプル

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

- main.output.js, main.output.js.mapを出力します。
- main.output.jsのファイル容量は、performanceフィールドで設定した閾値を上回るので、webpack実行時にコンソールに警告が出力されます。
- main.output.js.mapもファイル容量はオーバーしていますが、assetFilterで除外している為、警告は出力されません。

