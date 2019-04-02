js tree shaking 直译 摇树 用处：项目中一些非业务型注释性代码或者引用库中的多余代码，如果编译上线时不去除，则用户在使用应用过程中会加载一些无用代码，造成资源浪费。因此在编译打包上线时，要去除这些代码
使用场景：
1.常规优化
2.引入第三方库的某一个功能时
可使用插件Webpack.optimize.UglifyJsPlugin()，去除无用代码
现在已经不支持上面插件，而是在webpack.config.js中配置
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
optimization.minimize = true,在mode = production 生产环境中默认为true，无需配置压缩，会自动压缩代码

css tree shaking
使用 purify css    npm install purifycss-webpack
glob.sync 让我们同时加载更多的多路径 npm install glob-all --save-dev