单页面（入口）代码分隔和懒加载

代码分隔
1.分离业务代码和第三方依赖
2.分离业务代码和业务公共代码和第三方依赖
3.分离首次加载和访问后加载的代码


动态导入
第一种，也是推荐选择的方式是，使用符合 ECMAScript 提案 的 import() 语法。第二种，则是使用 webpack 特定的 require.ensure，已不推荐使用，被import（）替代
