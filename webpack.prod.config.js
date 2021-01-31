const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const commonConfig = require('./webpack.common.config');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new CleanWebpackPlugin()],
});