const presets = [
  ["@babel/preset-env",
    {
      targets: {
        browsers: ["> 1%", "last 2 versions"]
      },
      useBuiltIns: "usage"
    }
  ]
];

module.exports = { presets };

// "presets": [
//   ["env", {
//       "targets": { //指定要转译到哪个环境
//           //浏览器环境
//           "browsers": ["last 2 versions", "safari >= 7"],
//           //node环境
//           "node": "6.10", //"current"  使用当前版本的node

//       },
//        //是否将ES6的模块化语法转译成其他类型
//        //参数："amd" | "umd" | "systemjs" | "commonjs" | false，默认为'commonjs'
//       "modules": 'commonjs',
//       //是否进行debug操作，会在控制台打印出所有插件中的log，已经插件的版本
//       "debug": false,
//       //强制开启某些模块，默认为[]
//       "include": ["transform-es2015-arrow-functions"],
//       //禁用某些模块，默认为[]
//       "exclude": ["transform-es2015-for-of"],
//       //是否自动引入polyfill，开启此选项必须保证已经安装了babel-polyfill
//       //参数：Boolean，默认为false.
//       "useBuiltIns": false
//   }]
// ]
