const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV;
const isDev = mode === "development";
const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  entry: {
    main: "./index.js",
  },
  output: {
    filename: `./js/${filename("js")}`,
    path: path.resolve(__dirname, "build"),
  },
  mode,
  context: path.resolve(__dirname, "src"),
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "./css", to: "../build/css" },
        { from: "./fonts", to: "../build/fonts" },
        { from: "./images", to: "../build/images" },
      ],
    }),
  ],
  devServer: {
    contentBase: "./build",
    open: true,
    port: 3000,
    hot: true,
    compress: true,
    overlay: true,
    writeToDisk: true,
  },
};