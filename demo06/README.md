1.处理less和sass




2.提取css
  两种方式 1. extract-loader  2.ExtractTextWebpackPlugin ,该方式比较主流使用
  在使用2方法时需同时安装webpack，不然会报错Cannot find module 'webpack/lib/Chunk'
  因为extract-text-webpack-plugin暂未支持webpack4版本，所以在打包时会报错
(node:4154) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
/usr/local/lib/node_modules/webpack/lib/Chunk.js:846
		throw new Error(
		^

Error: Chunk.entrypoints: Use Chunks.groupsIterable and filter by instanceof Entrypoint instead
    at Chunk.get (/usr/local/lib/node_modules/webpack/lib/Chunk.js:846:9)
    at /Users/iqgtest/study/my-webpack/demo06/node_modules/extract-text-webpack-plugin/dist/index.js:176:48
    at Array.forEach (<anonymous>)
    at /Users/iqgtest/study/my-webpack/demo06/node_modules/extract-text-webpack-plugin/dist/index.js:171:18
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/usr/local/lib/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:7:1)
    at AsyncSeriesHook.lazyCompileHook (/usr/local/lib/node_modules/webpack/node_modules/tapable/lib/Hook.js:154:20)
    at Compilation.seal (/usr/local/lib/node_modules/webpack/lib/Compilation.js:1231:27)
    at hooks.make.callAsync.err (/usr/local/lib/node_modules/webpack/lib/Compiler.js:546:17)
    at _err0 (eval at create (/usr/local/lib/node_modules/webpack/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:11:1)
    at _addModuleChain (/usr/local/lib/node_modules/webpack/lib/Compilation.js:1082:12)
    at processModuleDependencies.err (/usr/local/lib/node_modules/webpack/lib/Compilation.js:998:9)
    at process._tickCallback (internal/process/next_tick.js:61:11)
    解决办法如下
      只要下载安装extract-text-webpack-plugin测试版即可。
      npm install --save-dev extract-text-webpack-plugin@next

打包成功后没有自动把提取出来的样式文件加载到html中