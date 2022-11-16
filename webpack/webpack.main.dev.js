/*
 * @Author: hansen
 * @Date: 2022-10-28 17:01:36
 * @LastEditors: hansen
 * @LastEditTime: 2022-10-31 09:37:50
 * @FilePath: \visResumeMock\webpack\webpack.main.dev.js
 */
const path = require("path");
const baseConfig = require("./webpack.base.js");
const webpackMerge = require("webpack-merge");

const mainConfig = {
  entry: path.resolve(__dirname, "../app/main/electron.ts"),
  target: "electron-main",
  output: {
    filename: "electron.js",
    path: path.resolve(__dirname, "../dist"),
  },
  devtool: "inline-source-map",
  mode: "development",
};

module.exports = webpackMerge.merge(baseConfig, mainConfig);
