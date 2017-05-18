const webpack = require('webpack');

module.exports = {
  entry: './entry',
  output: {
    filename: 'output.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
    })
 ]
};
