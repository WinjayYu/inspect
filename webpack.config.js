var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
	entry: './javascripts/application.js',
	output: {
		filename: '[name].js',
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
}