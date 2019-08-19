
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const WebpackPluginPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

const CopyWebpackPluginConfig= new CopyWebpackPlugin([
  { from: './client/default.css', to: path.resolve(__dirname, 'public') },
  { from: './client/404.html', to: path.resolve(__dirname, 'public') },
  { from: './client/500.html', to: path.resolve(__dirname, 'public') }
]);

module.exports = {
  entry: './client/index.jsx',
  output: {
    filename: 'js/bundle.[hash].js',
    path: path.resolve(__dirname, 'public')
  },
  module : {
    rules : [
      {
          test    : /\.jsx?$/,
          exclude : /node_modules/,
          loader  : 'babel-loader',
		  options: {
			presets: ['react'],
			babelrc: false
		  }
      },
      {
          test    : /\.css?/,
          loader  : 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    WebpackPluginPluginConfig,
    CopyWebpackPluginConfig
  ]
};
