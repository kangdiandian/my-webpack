AMD CMD UMD
AMD CMD 相同点，一个文件为一个模块， define定义一个模块 require引用一个模块；不同点：AMD依赖前置，提前执行 CMD 尽可能懒执行

webpack常用关键配置
一.常用loader: loader将一些文件处理转化为js认识的模块
 1.编译相关
 babel-loader  es6代码编译为浏览器可识别的es5
 ts-loader typeScript代码编译
 2.样式相关
 style-loader、css-loader、less-loader、posrcss-loader
 3.文件相关
 file-loader、url-loader
二.plugins 配置，参与整个打包过程，可以做打包优化和压缩，配置编译时的变量
 1.优化相关
 CommonsChunkPlugin 提取不同chunk之间相同的代码，将相同的代码提取出一个单独的代码块
 UglifyjsWebpackPlugin 混淆、压缩代码
 2.功能相关
 ExtractTextWebpackPlugin 将css提取出为一个单独的文件
 HtmlWebpackPlugin 自动生成Html文件
 HotModuleReplacementPlugin 模块热更新
 CopyWebpackPlugin 帮助拷贝文件,帮助拷贝引用的已经打包好的文件


 chunk 代码块


babel https://www.babeljs.cn
npm install --save-dev babel-loader @babel/core babel-plugin-transform-runtime @babel-preset-env
babel presets 打包规范总结
    参数targets 告诉babel，当编译时根据指定的targets，选择哪些语法编译，哪些语法不编译
    targets.browsers 指定浏览器   browserslist / can I use 查看支持的指定目标
    targets.node 指定node版本


