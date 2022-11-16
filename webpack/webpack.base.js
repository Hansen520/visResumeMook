/*
 * @Author: hansen
 * @Date: 2022-10-28 17:01:27
 * @LastEditors: hansen
 * @LastEditTime: 2022-11-09 11:14:17
 * @FilePath: \visResumeMock\webpack\webpack.base.js
 */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.join(__dirname, '../', 'app/renderer'),
      '@assets': path.join(__dirname, '../', 'assets/'),
      '@common': path.join(__dirname, '../', 'app/renderer/common'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  // plugins: [new CleanWebpackPlugin()],
};
