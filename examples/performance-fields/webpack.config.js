module.exports = {
  entry: './entry',
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['react'],
        plugins: ['syntax-dynamic-import']
      }
    }]
  },
  performance: {
    hints: 'error',
    maxEntrypointSize: 100,
    maxAssetSize: 100,
    assetFilter: file => {
      console.log('assetFilter:', file);
      return true;
    }
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  }
};
