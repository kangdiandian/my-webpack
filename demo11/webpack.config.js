const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js'
  },
  //当引入的库为本地的库时，可通过给本地文件起别名的方法找到该文件
  // resolve: {
  //   alias: {
  //     jquery$: path.resolve(__dirname, '文件路径')
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: path.resolve(__dirname, 'src/app.js'),
        use: [
          {
            loader: 'imports-loader',
            options: {
              $: 'jquery',
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 通过插件处理
    // new webpack.ProvidePlugin({
    //   $: 'jquery'
    // })
  ]
}