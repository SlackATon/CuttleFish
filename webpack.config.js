const path = require('path')

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
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react']
				}
			}
		]
	}
}
