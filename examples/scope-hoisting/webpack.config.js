const path = require('path');
const webpack = require('webpack');

const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  compress: { warnings: false },
});

module.exports = [
  // Scope Hoisting 無効
  {
    entry: './entry.js',
    output: {
      filename: 'no-scope-hoisting.js',
      path: path.join(__dirname,'build'),
    }
  },
  {
    entry: './entry.js',
    output: {
      filename: 'no-scope-hoisting.min.js',
      path: path.join(__dirname,'build'),
    },
    plugins: [uglifyPlugin]
  },

  // Scope Hoisting 有効
  {
    entry: './entry.js',
    output: {
      filename: 'scope-hoisting.js',
      path: path.join(__dirname,'build'),
    },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin()
    ]
  },
  {
    entry: './entry.js',
    output: {
      filename: 'scope-hoisting.min.js',
      path: path.join(__dirname,'build'),
    },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      uglifyPlugin,
    ]
  },
];
