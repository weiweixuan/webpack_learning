const path = require("path");
const webpack = require("webpack");
module.exports = {
  mode: "development", // 生产模式 production 开发模式 development
  // entry: './src/index.js', //入口文件(单入口打包)
  entry: {
    //多入口文件打包，output需要调整
    index: "./src/index.js",
    search: "./src/searchJs.js",
    main: "./src/Main.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"), //生成的路径
    // filename: 'bundle.js' //文件名(单入口)
    filename: "[name].js" //多入口导出
  },
  //安装的loader在module的rules里
  module: {
    rules: [
      { test: /.js$/, use: "babel-loader" }, //es6-loader
      { test: /.css$/, use: ["style-loader", "css-loader"] }, //注意先写styleloader在写cssloader，因为loader调用时从右往左的，解析css后再添加到style上
      { test: /.less$/, use: ["style-loader", "css-loader", "less-loader"] }, //less-loader在先解析为css，写在最后面即可
      { test: /.styl$/, use: ["style-loader", "css-loader", "stylus-loader"] }
    ]
  },
  // 安装插件
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./dist",
    hot: true
  }
};
