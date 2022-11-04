const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
	devServer: {
		proxy: {
			'/api':{
				target: 'http://42.192.86.233:8090',
				ws: true,
				changeOrigin: true,
				pathRewrite:{
					'^/api': ''
				}
			}
		}
	}
}
