const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'source-map',

	context: path.join(__dirname, 'src'),
	entry: './index.js',

	output: {
		filename: 'myBundle.js',
		path: path.resolve(__dirname, 'dist'),
	},

	devServer: {
		hot: true,
		port: 8080,
		static: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env',
									{
										targets: 'defaults',
									},
								],
								'@babel/preset-react',
							],
						},
					},
				],
			},
			{
				test: /\.(scss|css)$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},
};
