const path = require('path')
module.exports = {
  mode: 'production', // 生产模式
  // entry: './src/index.js', //入口文件(单入口打包)
  entry: {
    //多入口文件打包，output需要调整
    index: './src/index.js',
    search: './src/searchJs.js',
    main: './src/Main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'), //生成的路径
    // filename: 'bundle.js' //文件名(单入口)
    filename: '[name].js' //多入口导出
  },
  //安装的loader在module的rules里
  module: {
    rules: [{ test: /.js$/, use: 'babel-loader' }] //es6-loader
  }
}
