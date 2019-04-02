

// import './subPageA';
// import './subPageB';
// import(/*webpackChunkName: "subPageA"*/'./subPageA').then(subPageA => {
// });
// 动态require.ensure导入代码不会执行，只有在callback中调用才会执行
// require.ensure('module名称', callback, errCallback, '自定义chunk名称')
// 动态import()导入代码会执行
// import(/*webpackChunkName: "subPageB"*/'./subPageB').then();
// import * as _ from 'lodash';
// 动态加载第三方依赖，可以实现业务代码和第三方依赖分离
setTimeout(function() {
  import(/*webpackChunkName: "subPageA"*/'./subPageA').then(subPageA => {
});
}, 10000);
export default 'index';
