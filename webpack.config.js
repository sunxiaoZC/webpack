const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') //
module.exports = {
  //   手动配置
  entry: {
    index: './src/index.js'
    // hot: 'webpack/hot/dev-server.js' // 热替换  动态更新更改
    // print: './src/print.js'
    //   another: './src/another-module.js'
    // client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true'
    //开发服务器客户端，用于web socket传输，热和实时重载逻辑
  },
  // 共享thunk 配置
  //   entry: {
  //     index: {
  //       import: './src/index.js',
  //       dependOn: 'shared'
  //     },
  //     print: {
  //       import: './src/print.js',
  //       dependOn: 'shared'
  //     },
  //     another: {
  //       import: './src/another-module.js',
  //       dependOn: 'shared'
  //     },
  //     shared: 'lodash'
  //   },
  mode: 'development',
  devtool: 'inline-source-map', //准确地知道错误来自于哪个源文件
  devServer: {
    static: './dist', // 修改配置文件，告知 dev server，从什么位置查找文件
    // hot: true //热替换
    //开发服务器客户端，用于web socket传输，热和实时重载逻辑
    hot: true,
    client: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '热替换'
    }),
    // 热替换插件
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'React',
      Component: ['react', 'component']
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 每次构建前清理 /dist 文件夹 避免浏览器混乱
    publicPath: '/' // 中间件启用
  },
  optimization: {
    moduleIds: 'deterministic',

    //     //我们要在一个 HTML 页面上使用多个入口时
    runtimeChunk: 'single',
    //     // splitChunks 自带插件
    //     // 重复的 lodash 模块去除
    //  不再含有来自 node_modules 目录的 vendor 代码，并且体积减少
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        use: ['babel-loader']
      },
      {
        // 下载css依赖
        // 加载css配置
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        // webpack只带处理依赖
        // 照片配置
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        // webpack只带处理依赖
        //加载 fonts 字体配置
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader']
      }
    ]
  }
}

// 环境变量

// module.exports = env => {
//   console.log('Goal', env.goal)
//   console.log('Production', env.production)
//   return {
//     entry: './src/index.js',
//     output: {
//       filename: 'bundle.js',
//       path: path.resolve(__dirname, 'dist')
//     }
//   }
// }
