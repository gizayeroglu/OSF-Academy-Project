const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: "./src/page-index/index.js",
    services: "./src/page-services/services.js",
    error: "./src/page-error/error.js",
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 5555,
    writeToDisk: false,
  },

  // https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/page-index/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/page-services/services.html",
      inject: true,
      chunks: ["services"],
      filename: "services.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/page-error/error.html",
      inject: true,
      chunks: ["error"],
      filename: "error.html",
    }),
  ],
};
