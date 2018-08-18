const webpack = require('webpack');
var path = require('path');
const nodeExternals = require('webpack-node-externals');
const packageJson = require('./package.json');
const NodemonPlugin = require('nodemon-webpack-plugin')

const DEBUG = process.env.NODE_ENV !== 'production';

const plugins = [];
if(DEBUG) {
  plugins.push(new NodemonPlugin({
    nodeArgs: "--inspect"
  }));
}
module.exports = {
  entry: './src/main.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'backend.js'
  },
  optimization: {
    minimize: !DEBUG
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
        	"babel-loader",
        	"eslint-loader"
        ]
      }
    ]
  },
  plugins
}
