const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        use: ['url-loader'],
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "index.js"
  },
  externals: {
    'react': 'react',
  }
};