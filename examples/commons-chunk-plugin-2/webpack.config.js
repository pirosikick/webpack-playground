const path = require('path');
const webpack = require('webpack');

// 分割するモジュールを明示的に指定するサンプル
module.exports = {
  entry: {
    a: './entry-a',
    // 明示的に共通モジュールを定義
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, './build'),
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: [
        // entry.vendorを共通モジュールとして使用
        'vendor',

        // manifestにはwebpackのRuntimeと分割ファイルの情報（ハッシュ値など）が入る
        // manifestを作らない場合、vendorにこれらが含まれてしまい、
        // vendorで指定したモジュールに変更がない場合でも影響を受けるので、
        // 長くキャッシュしたい場合はmanifestを作る方がよい
        // 下記1行をコメントアウトし、entry-a.jsを変更した時に、
        // vendorファイルのハッシュが変わるのを確認すると理解しやすいです。
        'manifest'
      ],

      // 省略した場合、output.filenameが使われる
      // filename: 'vendor.js',

      // entry.vendorで指定したモジュール以外が
      // このファイルに入り込まないように、
      // 閾値を無限（Infinity）を設定
      minChunk: Infinity,
    })
  ]
};
