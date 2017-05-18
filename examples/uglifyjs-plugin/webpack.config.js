// 例）UglifyjsWebpackPluginの適用
//
// uglifyjsを使ったコード圧縮を行うプラグイン
//
// 事前にnpmでuglifyjs-webpack-pluginとuglifyjsをインストールする
// $ npm install --save-dev uglifyjs-webpack-plugin uglifyjs
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './entry',
  output: { filename: 'output.js' },
  plugins: [
    // コンストラクタに設定値を渡す
    //
    // 各設定値に関しては、
    // プラグインのドキュメントを参照してください
    // https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
    new UglifyjsWebpackPlugin()
  ]
};
