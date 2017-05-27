module.exports = {
  entry: () => './entry.js',

  // Promiseも可
  // entry: () => Promise.resolve('./entry.js'),

  // 下記はNG. entryフィールドに直接関数・Promiseの場合のみOK
  // entry: {
  //   func: () => './entry.js',
  //   promise: () => Promise.resolve('./entry.js'),
  // },

  output: {
    filename: '[name].bundle.js',
  },
};
