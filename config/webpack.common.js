const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const root = path.resolve(__dirname, "..");

module.exports = {
  entry: path.resolve(root, "src", "index.js"),

  output: {
    path: path.resolve(root, "dist"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
    clean: true,
    publicPath: "/",
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf)$/,
        use: "file-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(root, "public", "index.html"),
    }),
  ],
};
