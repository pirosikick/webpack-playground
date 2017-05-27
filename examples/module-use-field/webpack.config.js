// webpackでCSS Module
module.exports = {
  entry: './app.js',
  output: {
    filename: 'app.bundle.js',
  },
  module: {
    rules: [{
      // 拡張子が.scssのファイルに対して、
      // style-loader, css-loader, sass-loaderを適用する
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader', options: { modules: true } },
        { loader: 'sass-loader' },
      ]

      // loaderフィールドのみの利用の場合、文字列で記述可能
      // use: [
      //   'style-loader',
      //   { loader: 'css-loader', options: { modules: true } },
      //   'sass-loader',
      // ]
    }]
  }
};
