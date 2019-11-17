## 初始化项目：npm init -y

## 安装 webpack 和 webpack-cli: cnpm i webpack webpack-cli --save-dev

### 检查 webpack 版本： node_modules/.bin/webpack -v

配置 webpack.config.js 文件：

```javascript
const path = require("path");
module.exports = {
  mode: "production", // 生产模式
  entry: "./src/index.js", //入口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};
```

### 打包：node_modules/.bin/webpack 即可

---

```javascript
小知识：node path 模块
path.join() ，path.resolve()
path.join():方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。

例如：path.join('foo', 'baz', 'bar'); // 返回 'foo/baz/bar'

注：如果连接后的路径字符串是一个长度为零的字符串，则返回 '.'，表示当前工作目录。

path.resolve
path.resolve:方法会把一个路径或路径片段的序列解析为一个绝对路径。

例如：

注： 当前工作目录为 /home/myself/node

1、path.resolve('/foo/bar', './baz');// 返回: '/foo/bar/baz'

2、path.resolve('/foo/bar', '/tmp/file/');// 返回: '/tmp/file'

3、path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');// 如果当前工作目录为 /home/myself/node，// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
```

### 每次手动编译，十分不友好，我们在 package.json 的 script 里加个配置，这样就可以 npm run build 打包编译啦！

`"build": "webpack"`

### entry 和 output 属性

可以设置单入口和多入口打包，---代码见配置文件---

### 安装 loader

1 安装 es6 loader:

> 安装依赖：cnpm i @babel/core @babel/preset-env babel-loader -D
>
> > 创建.babelrc 文件，里面写入对应的 loader,再在 webpack.config.js 里的 module 下的 rules 数组里写入 loader 即可

2 安装 react-loader：

> 安装依赖：cnpm i react react-dom @babel/preset-react -D
>
> > 在.babelrc 文件里添加@babel/preset-react 即可使用,(具体见 src/Main.js 使用)

3 安装 css-loader

> 安装依赖：cnpm i style-loader css-loader -D
>
> > 在 webpack.config.js 中写上
> > `{ test: /.css$/, use: ['style-loader', 'css-loader'] }`
> > ，然后就可以在页面里引入 css 样式直接使用

3.1 在项目里安装 less

> 安装依赖：cnpm i less less-loader -D
> `{ test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }`
> 即可使用

3.2 在项目里安装 stylus

> 安装依赖：cnpm i stylus stylus-loader -D
> `{ test: /.styl$/, use: ['style-loader', 'css-loader', 'stylus-loader'] }`
> 即可使用

### 文件监听

每次项目修改后，都需要重新编译打包，现在使用文件监听，可以监听并打包

> 在 package.json -> script 里加一个命令：

```
"watch":"webpack --watch"
```

### 文件热更新

1 webpack-dev-server：

> 文件监听会在磁盘里生成最新的打包后的文件，但是还需要在页面上手动刷新才可以，热更新会在内存中生成，本地代码变化后直接同步页面做出修改

```javascript
//在package.json => script中：
"dev": "webpack-dev-server --open" //--open会默认打开浏览器
//在webpack.config.js文件中：
//先引入webpack
const webpack = require("webpack");
//在导出的模块里：
// dev-server是在开发环境中使用的，所以要把mode属性改成:development
mode:"development",
 // 安装插件
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./dist",
    hot: true
  }
```

> 然后 npm run dev

> > 如果提示 Cannot find module 'webpack',依次安装下面三个命令就好啦~

```javascript
npm install webpack
npm install webpack-dev-server
npm install --save-dev webpack-cli
```

2 webpack-dev-middleware：中间件也可实现热更新
