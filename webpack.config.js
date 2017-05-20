var path = require('path');
module.exports = {
  entry: './webapp.js',
  output: {
    path: './',
    filename: 'index.js',
          },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
              }
          }
        ]
      },
  target: 'node'
}