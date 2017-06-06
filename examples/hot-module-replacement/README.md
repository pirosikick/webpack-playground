# Hot Module Repleacementのサンプル

## 最初の一度だけ実行

```console
# 依存関係のインストール
$ yarn install
```

## 実行

```
$ ./node_modules/.bin/webpack-dev-server --hot

# もしくは
$ yarn run webpack-dev-server -- --hot
```

- webpack dev serverがlocalhost:8080で起動しますので、ブラウザで開くと動作確認出来ます
- ブラウザを開いた状態で、hello.jsやentry.jsを編集し、ブラウザがリロードせずに内容が更新されていることを確認しましょう

