const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProduction ? "production" : "development",

  entry: "./index.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: isProduction ? "/Weather-app/" : "/", // ✅ dynamic publicPath
    clean: true,
    assetModuleFilename: "images/[hash][ext][query]",
  },

  devtool: isProduction ? false : "eval-source-map",

  devServer: {
    open: true,
    hot: true,
    port: 3000,
    historyApiFallback: true,
    // ✅ No static.directory needed — HtmlWebpackPlugin handles in-memory HTML
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext][query]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./template.html",
      filename: "index.html",
     
    }),
    new MiniCssExtractPlugin({
      filename: "[contenthash].css",
    }),
  ],
};


