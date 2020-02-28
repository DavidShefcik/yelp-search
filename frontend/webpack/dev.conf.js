/*
* David Shefcik 2020
*/

/* Imports */
// Modules
const merge = require("webpack-merge");
const path = require("path");

// Config
const baseConfig = require("./base.conf");

/* Config */
module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    contentBase: path.join(__dirname, "../dist"),
    inline: true,
    overlay: true,
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/
    }
  }
});