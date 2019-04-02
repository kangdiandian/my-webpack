/**
 * 1.入口和出口文件一致
 * 2.loader配置
 * 核心，通过环境判断来确定使用哪个配置
 */
const merge = require('webpack-merge');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');
const productionConfig = require('./webpack.prod.conf');
const developmentConfig = require('./webpack.dev.conf');

const generateConfig = env => {
  const scriptLoader = [{ loader: 'babel-loader' }].concat(
    env === 'production' ? [] : [{
      loader: 'eslint-loader',
      options: {
        formatter: eslintFriendlyFormatter,
      },
    }],
  );
  const cssLoader = [
    {
      loader: 'css-loader',
      options: {
        sourceMap: env === 'development',
      },
    },
  ];
  const styleLoader = env === 'production' ? ExtractTextPlugin.extract({ fallback: 'style-loader', use: cssLoader }) : [{ loader: 'style-loader' }].concat(cssLoader);
  return {
    mode: env,
    entry: {
      main: './src/app.js',
    },
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, '../dist'),
      filename: 'js/[name]-[hash:5].js',
    },
    // 创建 import 或 require 的别名 https://webpack.docschina.org/configuration/resolve/#resolve-alias
    // resolve: {
    //   alias: '',
    // }
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: scriptLoader,
        },
        {
          test: /\.css$/,
          use: styleLoader,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
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
    ],
  };
};

module.exports = env => {
  const config = env === 'production' ? productionConfig : developmentConfig;
  return merge(generateConfig(env), config);
};
