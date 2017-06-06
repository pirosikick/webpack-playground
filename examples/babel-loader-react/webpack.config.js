// webpack.config.js
module.exports = {
  entry: './app',
  output: { filename: 'app.bundle.js' },
  // babel-loaderでJSXの変換を行う
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['react']
      }
    }]
  }
};
