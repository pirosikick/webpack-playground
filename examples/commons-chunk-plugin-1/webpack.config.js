const webpack = require('webpack');

module.exports = {
  entry: {
    a: './entry-a',
    b: './entry-b',
    c: './entry-c',
  },
  output: {
    filename: '[name].bundle.js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // entryフィールドの名前と被らないようにつける
      name: 'commons',

      // 出力ファイル名
      // output.filenameと同じプレースホルダーを使用できる
      filename: 'commons.js',

      // 分離対象となるエントリポイントからの参照数の閾値
      // minChunks: 3,

      // 対象となるエントリポイントの指定
      // デフォルトでは全てのエントリポイントが対象になる
      // chunks: ['a', 'b']
    })
  ]
};
