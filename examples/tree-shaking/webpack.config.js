const webpack = require('webpack');

const plugins = [
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.optimize.UglifyJsPlugin({
  })
];

module.exports = [
  // tree shaking無し
  {
    entry: './entry',
    output: { filename: 'normal.js' },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015']
        }
      }]
    },
    plugins,
  },
  // tree shaking有り
  {
    entry: './entry',
    output: { filename: 'tree-shaking.js' },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          // BabelでES Moduleの変換を無効にする
          presets: [['es2015', { modules: false }]]
        }
      }]
    },
    plugins,
  }
];
