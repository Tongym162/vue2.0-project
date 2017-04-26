var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'vui': resolve('src/vui'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader?name=static/fonts/[name].[md5:hasg:hex:7].[ext]'  //字体文件最后会以字符的形式保存在css文件中
        /*loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }*/
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'  //处理顺序 从右到左
        // ?importLoaders=1 表示 引入嵌入的 css文件也会按照postcss这样自动添加前缀
        /*loader:  'style!css'*/
      },
      {
        test: /\.less$/,
        loader: 'style!css!postcss!less'
        /*loader: 'style!css!less'*/
      },
      {
        test: /\.sass/,
        loader: 'style!css!postcss!sass'
      },
      {
        test: /\.(css|scss|less)$/,
        loader:"style-loader!css-loader?importLoaders=1!postcss-loader" //由于webpack2.X 版本对post-css书写方式的改变
        //需要新添加 postcss.config.js
      }
    ],
  }
}
