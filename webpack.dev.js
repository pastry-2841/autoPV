const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    // contentBase: __dirname,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/monitor': {
        target: 'http://10.45.136.147:8080/',
      },
      // '/monitor': {
      //   target: 'http://10.7.0.15:8220/',
      // },
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热加载
  ]
})