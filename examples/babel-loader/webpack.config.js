// webpack.config.js
module.exports = {
  entry: './entry',
  output: {
    filename: 'entry.bundle.js',
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      options: { presets: ['es2017'] },
    }]
  }
};

// webpack.config.js
// module.exports = {
//   entry: './entry',
//   output: {
//     filename: 'entry.bundle.js',
//   }
// };
