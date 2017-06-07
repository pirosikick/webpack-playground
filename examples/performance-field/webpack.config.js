module.exports = {
  entry: {
    main: './entry',
  },
  output: {
    filename: '[name].output.js',
  },
  devtool: 'source-map',
  performance: {
    hints: 'warning', // or 'error'

    // エントリポイントに関係するファイルの合計サイズの閾値
    // バイト単位
    maxEntrypointSize: 250000,

    // webpackが出力するファイル毎の閾値
    // バイト単位
    maxAssetSize: 250000,

    // 検査対象のファイルをフィルタする
    assetFilter: (assetFilename) => {
      // ソースマップを検査対象から外す
      return !assetFilename.endsWith('.map');
    }
  }
}
