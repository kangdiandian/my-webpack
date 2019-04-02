const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-bundle-[hash:5].js'
  },
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
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          // outputPath: 'assets/imgs',
          // useRelativePath: true
          //   }
          // }
          // url-loader功能和file-loader相似，但是url-loader可以针对文件大小做限制，当文件大小低于指定限制时，可以返回一个DataURL base64编码
          {
            loader: 'url-loader',
            options: {
              name: '[name].min.[ext]',
              limit: 100000,
              outputPath: 'assets/imgs/',
              useRelativePath: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'img:data-src']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      chunks: ['main'],
      minify: {
        // 压缩空格
        collapseWhitespace: true
      }
    })
  ]
}