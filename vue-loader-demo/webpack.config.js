module.exports={
	entry: './main.js', //入口文件
	output: { //出口
		path: __dirname,
		filename: 'dist/bundle.js'
	},
	module: {
		loaders: [
			{test:/\.vue$/, loader:'vue'},
			{test:/\.js$/, loader: 'babel', exclude: /node_modules/}
		]
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	}
}