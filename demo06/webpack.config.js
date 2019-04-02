const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        publicPath: __dirname + '/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // 处理less
    // module: {
    //     rules: [
    //         {
    //             test: /\.less$/,
    //             use: [
    //                 'style-loader',
    //                 'css-loader',
    //                 'less-loader',
    //             ]
    //         }
    //     ]
    // },
    // 提取css
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        // new ExtractTextPlugin('style.css')
        //如果想要传入选项，你可以这样做：
        // allChunks 给插件指定提取css范围，为true时会将所有依赖的css提取到一个文件中
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true,
        })
    ]
}