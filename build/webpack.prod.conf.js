const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/all.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './all.min.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader',
        {
          loader: "postcss-loader",
          options: {
            ident: 'postcss',
            plugins: [
              require('autoprefixer')({
                'browsers': ['> 1%', 'last 2 versions']
              }),
            ]
          }
        },'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: './img',
              outputPath: './img'
            }  
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin(),
      new OptimizeCssAssetsWebpackPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './all.min.css',
    }),
    new HtmlWebpackPlugin({
      title: '首頁', // 輸出的 title 名稱
      filename: 'index.html', // 輸出檔名
      template: './src/index.html', // 套用的模版
      inject: false
    })
  ]
};