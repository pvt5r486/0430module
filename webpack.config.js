const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/all.js',
  output: {
    path: __dirname,
    filename: './src/all.min.js'
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
              emitFile: false
            }  
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './src/all.min.css',
    }),
  ]
};