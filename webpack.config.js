const path = require("path");
// path.resolve(__dirname, "./dist/");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist/"),
  },
  mode: "none",
};