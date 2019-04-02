const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 8088,
    overlay: true,
    contentBase: '../dist',
    proxy: {
      '/api': {
        target: 'https://m.devapi.iqianggou.com',
        changeOrigin: true,
        logLevel: 'debug',
      },
    },
    historyApiFallback: true,
    hot: true,
    hotOnly: true, // 更新模块，但是刷新全局
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
