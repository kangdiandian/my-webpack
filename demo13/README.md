搭建开发环境 3种方案
1.webpack watch mode
命令行输入 wabpack -watch 或 webpack -w webpack会在本地起一个服务
2.webpack-dev-server 官网提供的
devServer{
  port: 端口，
  contentBase： 文件入口
  historyApiFallback：任意的 404 响应都可能需要被替代为 index.html
  proxy: {// 远程api请求服务代理

  }
}
# moudle hot reloading // 模块热更新
设置devServer.hot = true，
使用 new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
两个插件
css 模块热更新使用style-loader 为style样式追加样式
js 模块热更新
需要在js文件中调用api
if (module.hot) {
  module.hot.accept();
}

好处：
1.保持应用的数据状态
2.节省调试时间
3.样式调试更快

# source map 调试
1.devtool
 ＊＊＊js source map   在webpack.config.js中配置 devtool ，建议使用'cheap-module-source-map'，线上调试建议使用 'source-map'
 ＊＊＊css source map 在loader中添加参数 sourceMap: true,
// 2.3了解即可
2.webpack.SourceMapDevToolPlugin
3.webpack.EvalSourceMapDevToolPlugin


# esLint 检查代码格式 设置
需要安装的：
eslint
eslint-loader
eslint-plugin-html  该插件用于检查在写在 script 标签中的代码
eslint-friendly-formatter  规定报错时输入的信息格式

配置eslint
    1. webpack config 中配置loader
    2.根目录下创建 .eslintrc.js 文件, 书写eslint本身相关的配置即检查规则  或者   在package.json 中添加  eslintConfig中配置
    Javascript Standard Style (https://standardjs.com)  此处是js一些书写规范的标准集合，根据该集合我们可以配置eslint帮助我们检查代码规范 或者
    https://github.com/lin-123/javascript  eslint-config-airbnb 翻译版

可参考https://blog.csdn.net/weixin_41559723/article/details/79129612

eslintrc.js 的配置，可以参考http://eslint.cn/docs/user-guide文档

eslint 配置项
root 限定配置文件的使用范围
parser 指定eslint的解析器
parserOptions 设置解析器选项
extends 指定eslint规范
plugins 引用第三方的插件
env 指定代码运行的宿主环境
rules 启用额外的规则或覆盖默认的规则
globals 声明在代码中的自定义全局变量
extends可以使用eslint官方推荐的，也可以使用第三方的，如：aribnb, google, standard。
使用第三方的airbnb
npm install eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y babel-eslint --save-dev

# 区分开发环境和生产环境
开发环境需要
  模块热更新
  sourceMap
  接口代理
  代码规范检查
生产环境需要
  提取公共代码
  压缩混淆
  文件压缩 或者图片压缩 base64编码
  去除无用代码
共同需要
  同样的入口
  同样的代码处理 （loader处理）
  同样的解析配置

实现区分开发环境和生产环境 webpack-merge 工具管理配置公共部分配置，衔接开发环境和生产环境
webpack.dev.config.js  开发环境配置
webpack.prod.config.js  生产环境配置
webpack.common.config.js  公共部分配置


第一步 提取公共配置


3.express + webpack-dev-middleware



# 分析打包结果
工具
  1.官方 offical analyse tool
  mac   webpack --profile --json > stats.json
  window  webpack --profile --json | Out-file 'stats.json' - Encoding OEM
  http://webpack.github.io/analyse/
  在该网站上打开上面生成的json文件
  2.业内知名webpack-bundle-analyzer 两种方式使用
    npm install webpack-bundle-analyzer --save-dev
    在webpack.config.js中引用
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzer;
    在plugins中引用即可。 new BundleAnalyzerPlugin()
    ///插件  BundleAnalyzerPlugin
    /// webpack-bundle-analyzer stats.json
