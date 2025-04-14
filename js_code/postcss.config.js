const autoprefixer = require('autoprefixer');
const postcssCustomProperties = require('postcss-custom-properties');
const cssnano = require('cssnano');

module.exports = ({ env }) => ({
  plugins: [
    autoprefixer,
    postcssCustomProperties,
    env === 'production' ? cssnano : false,
  ],
});
