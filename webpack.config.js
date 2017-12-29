var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './javascripts/application.js',
	output: {
		filename: 'main.[chunkhash].js',
		path: path.resolve(__dirname, 'release'),
	},
	resolve: {
    	extensions: ['.js']
  	},
	module: {
		loaders: [
			{
	          test: /\.js$/,
	          exclude: /node_modules/,
	          loader: "babel-loader",
	          query: { presets: ["es2015"] }
        	},
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
}