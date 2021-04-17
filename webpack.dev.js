const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: "./src/page-index/index.js",
    services: "./src/page-services/services.js",
    error: "./src/page-error/error.js",
    product: "./src/page-product/product.js",
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
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              // On development we want to see where the file is coming from, hence we preserve the [path]
              name: "[path][name].[ext]?hash=[hash:20]",
              esModule: false,
              limit: 8192,
            },
          },
        ],
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
      template: "./src/page-product/product.html",
      inject: true,
      chunks: ["product"],
      filename: "product.html",
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
