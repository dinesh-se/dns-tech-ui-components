const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { 
    main: './src/index.js',
    vendor: './src/vendor.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            esModule: false,
            name: '[name].[hash].[ext]',
            outputPath: 'assets',
            publicPath: 'assets',
          }
        }]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ]
}