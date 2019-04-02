const path = require('path');
//HtmlWebpackPlugin 自动生成index.html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  // 配置文件的上下文，基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
  // context: path.resolve(__dirname, 'app');
  // 单入口，打包为一个文件
  entry: './main.js',
  output: {
    path: __dirname + '/dist',
    filename: '[hash].js',
  },
  // 多入口，打包为一个文件,当多入口文件打包时，filename如果为唯一名称，则会被覆盖，只生成一个文件
  // 可使用1.[name].js，以entry中键的名字命名
  // entry: {
  //   main: './main.js',
  //   page: './src/a.js',
  // },
  // output: {
  //   path: __dirname + '/dist',
  //   filename: '[name].js',
  // }
  // 2.使用[name]-[hsah].js命名，则以打包时的hash值命名
  // entry: {
  //   main: './main.js',
  //   page: './src/a.js',
  // },
  // output: {
  //   path: __dirname + '/dist',
  //   filename: '[name]-[hash].js',
  // }
  // 3.使用[chunkhash].js命名。该hash值在被打包文件有变动是，才会改变，可利用此功能，做静态资源版本升级
  // entry: {
  //   main: './main.js',
  //   page: './src/a.js',
  // },
  // output: {
  //   path: __dirname + '/dist',
  //   filename: '[chunkhash].js',
  // }
  plugins: [
    new HtmlWebpackPlugin({
      // HtmlWebpackPlugin配置链接 https://github.com/jantimon/html-webpack-plugin#configuration
      // 可以为生成的html文件命名
      filename: 'index-[hash].html',
      // 以template值的文件为模版自动生成index.html文件
      template: 'index.html'
      // 指定script标签的位置，默认为body中，可指定到head
      // inject: 'head'
    })
  ]
};
