const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js',
    },
    output: {
        publicPath: __dirname + '/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            // ident 表明接下来传的插件，是给谁调用的
                            ident: 'postcss',
                            plugins: [
                                // require('autoprefixer')(),
                                require('postcss-cssnext')()
                            ]
                        }
                    }
                ]
            }
        ]
    }
}