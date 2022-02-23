const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const WebpackOpenBrowserPlugin = require('webpack-open-browser-plugin')
module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true, //清理dist文件
    publicPath: '/' //中间件
  },
  devtool: 'source-map', //查看所有文件 方便调试
  devServer: {
    host: '0.0.0.0',
    port: 4000,
    hot: true,
    compress: true // 压缩文件
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react',
      inject: 'false', // 自动引入打包文件
      minify: true // 开启压缩
    }),
    new WebpackOpenBrowserPlugin({
      url: 'http://localhost:4000/'
    }),
    new webpack.ProvidePlugin({
      React: 'React',
      Component: ['react', 'component']
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]]
          }
        }
      }
    ]
  }
}
