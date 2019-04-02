/**
 * 必须使用CommonJs规范
 * 更多高级用法：https://www.webpackjs.com/concepts/output/
 */

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './app.js',
  },
  output: {
    publicPath: __dirname + '/dist/',
    path: path.resolve(__dirname, 'dist'), // 打包文件的输出目录
    filename: '[name]-[hash].js', // 输出bundle的名称，单入口页面，是一个静态名称，多入口页面，需要给每一个bundle分配一个唯一的名称。 https://www.webpackjs.com/configuration/output/#output-filename
  },
};

/**
 * __dirname: Node.js中，__dirname 总是指向被执行 js 文件的绝对路径，所以当你在/d1/d2/myscript.js 文件中写了 __dirname， 它的值就是 /d1/d2. 相反，./ 会返回你执行 node 命令的路径，例如你的工作路径. https://blog.csdn.net/zsensei/article/details/79094714
 * path.resolve 将路径或者路径片段处理成绝对路径。http://nodejs.cn/api/path.html#path_path_resolve_paths
 * output.publicPath 对应的是你这打好的包将来放在web服务器上后，使用域名访问时的位置，是在内存中不可见但真实存在的路径
 *
*/
