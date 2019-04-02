const path = require('path');
// const Webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const PurifyCss = require('purifycss-webpack');
const GlobAll = require('glob-all');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    // 最紧凑的输出
                    beautify: false,
                    // 删除所有的注释
                    comments: false,
                    compress: {
                        warnings: false, // 警告开关
                        drop_console: true,
                        // 内嵌定义了但是只用到一次的变量
                        collapse_vars: true,
                        // 提取出出现多次但是没有定义成变量去引用的静态值
                        reduce_vars: true
                    }
                }
            })
        ]
    },
    plugins: [
        // new Webpack.optimize.UglifyJsPlugin() 该插件在webpack4已被移除
        new PurifyCss({
            paths: GlobAll.sync([
                path.resolve(__dirname, './*.html'),
                path.join(__dirname, './src/*.js')
            ])
        }),
    ]
}