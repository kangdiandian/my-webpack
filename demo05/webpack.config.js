var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    publicPath: __dirname + '/dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         // 写在后面的loader先被接触
  //         {
  //           loader: 'style-loader',
  //           options: {
  //             insertAt: 'top',
  //             transform: './css.transform.js'
  //           }
  //         },
  //         {
  //           loader: 'css-loader'
  //         }
  //       ]
  //     }
  //   ]
  // }
  // style-loader/url 和 file-loader 配合,需配置output中publicPath
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader/url',
          'file-loader'
        ]
      }
    ]
  }
  // style-loader/useable 和 css-loader 配合使用
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         'style-loader/useable',
  //         'css-loader'
  //       ]
  //     }
  //   ]
  // }
};
