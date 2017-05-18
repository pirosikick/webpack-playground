const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    filename: '[name].[chunkhash].js',
    path: './build',
    publicPath: 'build',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['react']
      }
    }]
  },

entry: {
  a: './entry-a',
  // 明示的に共通モジュールを定義
  vendor: ['react', 'react-dom'],
},
plugins: [
  new webpack.optimize.CommonsChunkPlugin({
    // entry.vendorを共通モジュールとして使用
    name: ['vendor', 'manifest'],

    // 省略した場合、output.filenameが使われる
    // filename: 'vendor.js',

    // entry.vendorで指定したモジュール以外が
    // このファイルに入り込まないように、
    // 閾値を無限（Infinity）を設定
    minChunk: Infinity,
  })
]
};
