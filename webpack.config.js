//webpack.config.js

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = (env) => {
	return {
		entry: "./js/app.js",
		output: {
			path: __dirname + "/dist",
			filename: "bundle.js"
		},
		module: {
			loaders: [
				{
					test: /\.css$/,
					loader: ExtractTextPlugin.extract('css-loader')
				},
				{
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract('css-loader!sass-loader')
				}
			]
		},
		plugins: [
			new BrowserSyncPlugin({
				host: 'localhost',
				port: '3000',
				server: {
					baseDir: ['.']
				}
			}),
			new ExtractTextPlugin('css/styles.css', {
				allChunks: true
			})
		]
	}
}
