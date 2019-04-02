const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    publicPath: __dirname + '/dist/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-chunk.js'
  },
  plugins: [
    new CleanWebpackPlugin(
      ['dist'],
      {
        root: __dirname,
        verbose: true,
        dry: false
      }
    )
  ]
};
