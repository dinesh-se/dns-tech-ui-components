const path = require('path');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.config');

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
});