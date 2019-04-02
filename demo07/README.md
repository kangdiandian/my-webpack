postcss
PostCSS是一款使用插件去转换CSS的工具  https://www.jianshu.com/p/14b110cb1a38
https://github.com/postcss/postcss/blob/master/README-cn.md
Autoprefixer自动获取浏览器的流行度和能够支持的属性，并根据这些数据帮你自动为css规则添加前缀。
postcss-cssnano 帮助优化／压缩css  css-loader使用的就是这种压缩
postcss-cssnext 可以让我们现在使用未来的css语法。常见的新语法有
    1.css variables  css变量
    2.custom selectors 自定义的css选择器
    3.calc() 动态计算
［此项目已停止］ 已包含 autoprefixer
postcss-import 将@import引入的依赖文件内容直接取到当前css中，此时依赖的文件路径会变化为相对路径，因此需要postcss-url配合处理这个情况


在涉及到浏览器配置问题时，会有一个针对性的设置，即指定某些浏览器如何处理和兼容。此时会用到Browserslist，autoprefixer 和 cssnext 以及css-loader都会用到Broswerslist，怎样配置一份大家通用。两种方案
1.在package.json中配置，在使用时，所有插件默认会统一去该文件中查询
2.在项目根目录中创建.browerslistrc文件，里面放应用对浏览器的要求
https://www.npmjs.com/package/browserslist