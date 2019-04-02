const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js',
  },
  output: {
    publicPath: __dirname + '/dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
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
              outputPath: 'assets/imgs',
              useRelativePath: true
            }
          },
          {
            loader: 'img-loader',
            options: {
              pngquant: {
                quality: 80
              }
            }
          }
        ]
      }
    ],
  }
};
