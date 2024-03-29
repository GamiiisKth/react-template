
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		minimizer: [
			new UglifyJSPlugin({
				sourceMap: true
			}),
		]	
	}
});
