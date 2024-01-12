const path = require("path");
const dev = process.env.NODE_ENV == "development";

const liveServer = require("live-server");
// const webpack = require("webpack");

if (dev) {
  liveServer.start({
    root: "./",
    file: "index.html",
  });
}

module.exports = {
  watch: dev,
  //   mode: "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              import: true,
              url: true,
            },
          },
        ],
      },
      {
        test: /\.(pdf|png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].[ext]", outputPath: "../../dist/pdfs/" },
          },
        ],
      },
      {
        // test: /\.pdf$/i,
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {},
        //   },
        // ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js", ".ts"],
    fallback: { crypto: false, os: false },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
