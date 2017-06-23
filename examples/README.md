# 「入門webpack2」サンプル　webpack3版

## 事前準備

### Node.jsのインストール

Node.jsの6系をインストールしてください。下記URLからインストーラーをダウンロードできます。

https://nodejs.org/ja/

nodebrew, nvmなどのツールを使ってインストールしても構いません。

### yarnのインストール

各サンプルにはyarn.lockがありますので、yarnを使いnpmパッケージのインストールを行うと、サンプル開発時とほぼおなじパッケージで検証が可能です。公式ページのインストール方法を見て、yarnをインストールしてください。

https://yarnpkg.com/en/docs/install

## 目次

実行方法については、各サンプルのREADMEに記述しています。

- dynamic-entiry-field/
  - entryフィールドを動的に記述するサンプル
- multiple-config/
  - 一つの設定ファイルに複数の設定を記述するサンプル
- env-option/
  - envオプションを使った設定ファイルのサンプル
- babel-loader-react/
  - babel-loaderを使ったLoaderのサンプル
- module-use-field/
  - module.rulesのuseフィールドのサンプル
- uglifyjs-plugin/
  - UglifyjsPluginを使ったコード圧縮のサンプル
- hot-module-replacement/
  - Hot Module Repleacementのサンプル
- performance-field/
  - performanceフィールドのサンプル
- externals-field/
  - externalsフィールドを使ったファイル分割のサンプル
- commons-chunk-plugin-1/
  - CommonsChukPluginを使ったサンプル
- commons-chunk-plugin-2/
  - CommonsChukPluginを使ったサンプル（分割するモジュールを明示的に指定）
- dynamic-import/
  - import関数を使ったモジュールの動的読み込みのサンプル
  - webpack3のmagic comment対応版
- tree-shaking/
  - Tree shakingのサンプル
- scope-hoisting/
  - webpack3で導入されたScope Hoistingのサンプル
