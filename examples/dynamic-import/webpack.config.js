const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './app',
    app2: './app2'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: 'build/',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        // babel-plugin-syntax-dynamic-import
        // import関数を解釈できるようにするプラグイン
        plugins: ['syntax-dynamic-import']
      }
    }]
  }
};
