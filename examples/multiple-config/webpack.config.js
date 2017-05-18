const webpack = require('webpack');

// webpack2より、複数の設定を配列を用いて定義可能になった
module.exports = [
  // 設定その１
  {
    entry: './app',
    output: { filename: 'app.bundle.js' }
  },
  // 設定その２
  {
    entry: './app',
    output: { filename: 'app.bundle.min.js' },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  }
];
