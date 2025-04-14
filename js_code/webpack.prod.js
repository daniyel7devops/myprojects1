const { merge } = require('webpack-merge');
const commonGenerator = require('./webpack.common.js');

module.exports = (env) => merge(commonGenerator(env), {
  mode: 'production',
  devtool: 'source-map',
});

// Used by postcss setting the 'env' parameter
process.env.NODE_ENV = 'production';
