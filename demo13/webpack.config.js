const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js',
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[hash:5].js',
  },
  // devtool 具体可参考 https://webpack.docschina.org/configuration/devtool/   建议使用cheap-module-source-map
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 8088,
    overlay: true,
    contentBase: './dist',
    proxy: {
      '/api': {
        target: 'https://m.devapi.iqianggou.com',
        changeOrigin: true,
        logLevel: 'debug',
      }
    },
    historyApiFallback: true,
    hot: true,
    hotOnly: true, // 更新模块，但是刷新全局
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            },
          },
          {
            loader: 'eslint-loader',
            options: {
              formatter: eslintFriendlyFormatter,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
    // rules: [{
    //   test: /\.css$/,
    //   use: ExtractTextPlugin.extract({
    //     fallback: "style-loader",
    //     use: "css-loader"
    //   })
    // }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunks: ['main'],
    }),
    // 使用extract-text-webpack-plugin给css打包时出现报错,
    // Tapable.plugin is deprecated. Use new API on `.hooks` instead.
    // 原因是extract-text-webpack-plugin目前版本不支持webpack4。
    // 使用extract-text-webpack-plugin的最新的beta版npm install extract-text-webpack-plugin@next
    new ExtractTextPlugin({
      filename: 'css/[name]-[hash:5].css',
      allChunks: true,
    }),
    new CleanWebpackPlugin('dist'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
