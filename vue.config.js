const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    allowedHosts: ['localhost', 'jupit.bepcothanh.com'],
  },
})
