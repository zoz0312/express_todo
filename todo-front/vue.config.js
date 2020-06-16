const path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
	],
	/*
	'css': {
		'loaderOptions': {
			'sass': {
				'data': `
					@import "@/assets/scss/main.scss";
				`
			}
		}
	},
	*/
	'outputDir': path.resolve(__dirname, '../public'),
	'devServer': {
		'proxy': {
			'/api': {
				'target': 'http://localhost:4000/api',
				'changeOrigin': true,
				'pathRewrite': {
					'^/api': ''
				}
			}
		}
	}
}
