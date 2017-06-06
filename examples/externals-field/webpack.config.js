module.exports = [
  // externals無し
  {
    entry: './entry',
    output: { filename: 'no-externals.js' },
  },
  // externals有り
  {
    entry: './entry',
    output: { filename: 'externals.js' },
    // require('jquery') => window.jQuery
    // require('react') => window.React
    externals: {
      jquery: 'jQuery',
      react: 'React',
    }
  }
];
