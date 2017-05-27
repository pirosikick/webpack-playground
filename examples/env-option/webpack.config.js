const webpack = require('webpack');
const defaultEnv = { target: 'development' };

// --envオプション
//
// webpack --env.target=production でminifyする
module.exports = function (env = defaultEnv) {
  console.log('env is', env);

  if (env.target === 'production') {
    return {
      entry: './app',
      output: { filename: 'app.bundle.min.js' },
      plugins: [
        new webpack.optimize.UglifyJsPlugin()
      ]
    };
  }

  return {
    entry: './app',
    output: { filename: 'app.bundle.js' }
  };
};

// このような指定も可能：
// --env
//   -> env = true
// --env.target
//   -> env = { target: true }
// --env.a --env.b=hoge
//   -> env = { a: true, b: 'hoge' }
