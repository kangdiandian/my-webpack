const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    pageA: './src/pageA.js',
    pageB: './src/pageB.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    // 其他非入口文件的打包名称
    chunkFilename: '[name].chunk.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
					priority: 10,
					enforce: true
        },
        commons: {
          name: 'commons',
          chunks: 'initial',
          minSize: 100, //（默认值：30000）块的最小大小。
          minChunks: 2,
					maxInitialRequests: 5
        }
      }
    }
  },
  plugins: [
    // 自动删除目标文件夹的插件
    new CleanWebpackPlugin(
      ['dist'],
      {
          root: __dirname,       　　　　　　　　　　//根目录
          verbose: true,        　　　　　　　　　　//开启在控制台输出信息
          dry: false        　　　　　　　　　　//启用删除文件
      })
  ]
};
