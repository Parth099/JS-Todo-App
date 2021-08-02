const path = require("path");

module.exports = {
  entry: [
    "./src/index.js",
    "./src/pageLoader.js",
    "./src/DOMTaskTable.js",
    "./src/taskTracker.js",
    "./src/localStorageHandler.js",
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
    ],
  },
};
