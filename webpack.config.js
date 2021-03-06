const path = require('path')
const LiveReloadPlugin = require('webpack-livereload-plugin')

module.exports = {
	mode: 'development',
	entry: './client/index.js',
	output: {
		path: path.resolve(__dirname, 'public', 'dist'),
		filename: 'app.bundle.js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
			},
			{
				test: /\.svg/,
				use: {
					loader: 'svg-url-loader',
					options: {
						// make all svg images to work in IE
						iesafe: true
					}
				}
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react']
				}
			}
		]
	},
	plugins: [new LiveReloadPlugin()]
}
