module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname,
		publicpath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015', 'stage-1']
			}
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devtool: 'source-map',
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
};