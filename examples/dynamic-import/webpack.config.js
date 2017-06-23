const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './app',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
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
