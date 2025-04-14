const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const commonGenerator = require('./webpack.common.js');

module.exports = (env) => merge(commonGenerator(env), {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 8080,
    // Allows HTML5 History API routing
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
