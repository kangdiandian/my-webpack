const CleanWebpackPlugin = require('clean-webpack-plugin');
// 还有一些优化的插件
module.exports = {
  plugins: [
    new CleanWebpackPlugin('../dist'),
  ],
};
