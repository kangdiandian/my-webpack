// 此处向外暴露的是一个函数，作用是用来形变css
// 这个函数不在打包时执行，在style-loader帮助我们把样式文件塞入html文件时执行，执行时是在浏览器环境中，此时我们可以获取到浏览器的环境和信息，可根据不同的浏览器来对css进行形变,输入的css，输出的是形变后的css
module.exports = function (css) {
  console.log(css);
  console.log(window);
  // 例当屏幕宽度大于768时，将颜色变为绿色
  if (window.innerWidth > 768) {
    return css.replace('red', 'green');
  }else {
    return css;
  }
}
