npm install --save-dev html-webpack-plugin
创建了一个全新的文件，所有的 bundle 会自动添加到 html 中 


npm install --save-dev style-loader css-loader
加载 CSS
为了在 JavaScript 模块中 import 一个 CSS 文件，你需要安装 style-loader 和 css-loader，并在 module 配置 中添加这些 loader：


manifest   +  runtime
webpack 和 webpack 插件似乎“知道”应该生成哪些文件。答案是，webpack 通过 manifest，可以追踪所有模块到输出 bundle 之间的映射。如果你想要知道如何以其他方式来控制 webpack 输出，了解 manifest 是个好的开始。
runtime，以及伴随的 manifest 数据，主要是指：在浏览器运行过程中，webpack 用来连接模块化应用程序所需的所有代码。它包含：在模块交互时，连接模块所需的加载和解析逻辑。包括：已经加载到浏览器中的连接模块逻辑，以及尚未加载模块的延迟加载逻辑
通过 WebpackManifestPlugin 插件，可以将 manifest 数据提取为一个 json 文件以供使用。


mini-css-extract-plugin: 用于将 CSS 从主应用程序中分离。

prefetch(预获取)：将来某些导航下可能需要的资源
preload(预加载)：当前导航下可能需要资源

npm install --save-dev express webpack-dev-middleware  中间键


