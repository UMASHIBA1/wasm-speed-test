const path = require("path");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "output.js",
    path: path.join(__dirname, "dist/"),
  },
};
