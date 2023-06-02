const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    public: 'jupit.bepcothanh.com',
    allowedHosts: ['localhost', 'jupit.bepcothanh.com'],
  },
})
