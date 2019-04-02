1.生成html
使用 HtmlWebpackPlugin插件来做，
参数 options  template模版文件  filename文件名 minify是否压缩 chunks指定哪些chunk需要加到html页面 inject 配置是否将你需要的js和css文件通过标签的形式加到html页面中
      html-loader 处理html中引入的图片
      可以通过查询参数 attrs，来指定哪个标签属性组合(tag-attribute combination)应该被此 loader 处理。传递数组或以空格分隔的 <tag>:<attribute> 组合的列表。（默认值：attrs=img:src）
2.场景优化

