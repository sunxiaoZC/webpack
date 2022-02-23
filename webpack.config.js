//打包配置文件

const path = require('path')
const webpack = require('webpack')

// 打包html
const htmlWebpackPlugin = require('html-webpack-plugin')

// 浏览器可以打开所有服务

const webpackOpenBrowserPlugin = require('webpack-open-browser-plugin')

// 压缩css  打包抽离
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: 'development', // 开发模式
  entry: ['./src/main.js'], //入口文件

  output: {
    // 打包dist文件
    path: path.resolve(__dirname, 'dist'),
    // 以哈希算法得到长度为8 随机字符串  避免命名冲突
    filename: 'js/app.[hash:8].js',
    publicPath: ''
  },
  devtool: 'source-map', //查看所有文件 方便在线调试

  //启动服务

  devServer: {
    host: '0.0.0.0',
    port: 7000,
    hot: true, //热替换
    // open:"true",
    compress: true //压缩文件
  },

  // 使用插件

  plugins: [
    new htmlWebpackPlugin({
      title: 'react',
      template: './public/index.html',
      inject: true, // 自动引入打包文件
      minify: true //是否开启压缩
    }),

    new webpackOpenBrowserPlugin({
      url: 'http://localhost:7000/'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/app.[hash:8].css',
      chunkFilename: 'css/[id].[hash:8].css'
    }),

    //  全局导入 react component
    new webpack.ProvidePlugin({
      React: 'React',
      Component: ['react', 'component']
    })
  ],

  // 文件别名
  resolve: {
    alias: {
      '@': path.resolve('src')
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|svg|gif|eot|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 打包的图片最大 8M
              name: 'imgs/[name].[hash:8].[ext]' // photo.png  => photo.1234qwer.png
            }
          }
        ]
      },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.(sass|scss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  }
}
