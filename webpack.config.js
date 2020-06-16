/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const webpack = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const postcssConfig = require('./postcss.config.js')
const env = process.env.NODE_ENV

const config = {
  entry: './src/index.js',
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    // 配置文件路径别名
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpg|woff|svg|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: './img/[name]_[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: postcssConfig(env)
              }
            }
          ]
        })
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: { compact: false }
      },
      {
        test: /\.(string)$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: './css/[name].css',
      disable: env === 'development' ? true : false
    }),
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
      // minify: {
      //   collapseWhitespace: true, // 关闭空格
      //   removeComments: true, // 移除注释
      //   removeRedundantAttributes: true,
      //   removeScriptTypeAttributes: true,
      //   removeStyleLinkTypeAttributes: true,
      //   useShortDoctype: true,
      //   removeAttributeQuotes: false // 移除属性双引号
      // }
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 引用超过一次的模块抽取出来
        common: {
          name: 'common',
          chunks: 'all',
          minChunks: 2,
          priority: 2,
          enforce: true
        },
        // 将第三方模块提取出来
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          priority: 10,
          enforce: true,
          test: /\/node_modules\//
        }
      }
    }
  },
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: 4000,
    inline: true, //缺少该配置，会出现上面的错误
    historyApiFallback: true //缺少该配置，会出现上面的错误
  }
}

module.exports = config
