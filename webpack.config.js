const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/Weather-app/",
    clean: true,
    assetModuleFilename: "images/[hash][ext][query]",
  },
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "/", // Different for dev server
    },

    watchFiles: ["./template.html", "./index.js"], 
    open: true,
    hot: true,
    port: 3000,
    historyApiFallback: true,

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./template.html", 
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext][query]", // Consistent naming
        },
      },
    ],
  },
};
