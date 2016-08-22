module.exports = {
  context: __dirname,
  entry: "./tetris_assets/js/tetris.js",
  output: {
    path: "./tetris_assets/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js"]
  },
  devtool: "source-map"
};
