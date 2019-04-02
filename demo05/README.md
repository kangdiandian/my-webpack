处理css文件
loader
style-loader 通过向页面引入style标签来加载css样式，主要目的是在文档流中创建标签，使用css样式
css-loader 把 @import 和 url() 理解为 import / require()， 并解析，主要目的让我们可以引入一个文件

style-loader/url 和 file-loader 配合使用，css被单独打包，使用link标签引入,不常用，原因是当引入多个css文件时，会插入多个link标签,link越多造成网络请求越多，背离我们打包目的

style-loader/uesable 和css-loader配合使用，可以控制样式是否插入页面
css modules

配置less / sass

提取css代码
为什么？
1.css文件可以单独缓存，避免公共样式多次加载问题，优化
2.可以提取公共代码，不提取，会把css打包到相应的js文件中，会导致加载多次

style-loader参数options参考官方文档
insertAt: 默认外部引用css样式加载在head标签末尾，会覆盖页面的样式，可通过该设置改变
insertInto: 配置样式style标签插入文档流中位置
transform: 配置为一个相对(相对webpack.tranform.js)路径，例 './css.config.js',
singleton: true 配置多个css文件中的样式使用同一个style标签插入
