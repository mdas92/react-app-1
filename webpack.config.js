var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '');
var APP_DIR = path.resolve(__dirname, '');

var config = {
  entry: APP_DIR + '/webapp.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/, include : APP_DIR, loader : 'babel-loader', query:
            {
              presets:['es2015','stage-0','react']
            }
      },
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  node: {
   tls: 'empty',
    console: true,
    fs: 'empty',
    net: 'empty'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'core']
  },
};

module.exports = config;