const path = require('path')
const webpack = require("webpack")

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015', 'react',
          ],
        },
      }],
    },{
      test: /\.scss$/,
      use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }],
    }],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000,
    historyApiFallback: true,
  },
}
