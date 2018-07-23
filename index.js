module.exports = {
	presets: [
		['@babel/preset-env', {
			targets: {
				node: 8,
			},
			loose: true,
			modules: 'commonjs',
			useBuiltIns: 'usage',
		}],
		// './custom.js',
	],
};
