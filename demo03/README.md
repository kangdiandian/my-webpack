好处：
1.减少代码冗余，避免各页面重复加载某公共代码
2.提高浏览器加载速度，提高用户体验，已加载过的代码可不再重复加载


多页面解决方案

提取公共代码

webpack配置

代码提取，大多针对多入口使用，单入口页面可使用懒加载等方法实现
CommonsChunkPlugin 插件,提取 chunks 之间共享的通用模块
配置文档： https://webpack.docschina.org/plugins/commons-chunk-plugin
CommonsChunkPlugin已经从webpack v4 legato中移除。想要了解在最新版本中如何处理chunk，请查看SplitChunksPlugin。
