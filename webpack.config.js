const path = require("path");
const dev = process.env.NODE_ENV == "development";

const liveServer = require("live-server");

// Start live-server in development mode
if (dev) {
  liveServer.start({
    root: "./",
    file: "index.html",
  });
}

module.exports = {
  watch: dev,
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
        test: /\.(png|jpe?g|gif|pdf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]", // Outputs files in 'assets' directory
        },
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
