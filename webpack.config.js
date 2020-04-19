const webpack = require('webpack');
const path = require('path');
const WebpackCleanupPlugin = require("./config/hello-plugin");

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader', 
          {
            loader: path.resolve(__dirname, './config/hello-loader.js'),
            options: {
              name: 'World'
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new WebpackCleanupPlugin()
  ]
};

module.exports = config;