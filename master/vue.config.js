const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置devServer
  devServer: {
    host: 'localhost', // 项目运行的ip
    port: 8080, // 项目运行的端口号
    open: true
  } 
})
