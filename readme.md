## 初始化项目：npm init -y

## 安装 webpack 和 webpack-cli: cnpm i webpack webpack-cli --save-dev

### 检查 webpack 版本： node_modules/.bin/webpack -v

配置 webpack.config.js 文件：

```javascript
const path = require('path')
module.exports = {
  mode: 'production', // 生产模式
  entry: './src/index.js', //入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
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

> 安装依赖包：cnpm i react react-dom @babel/preset-react -D
>
> > 在.babelrc 文件里添加@babel/preset-react 即可使用,(具体见 src/Main.js 使用)

3 安装 css-loader
