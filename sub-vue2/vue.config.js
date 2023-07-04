const { defineConfig } = require('@vue/cli-service')
const { name } = require('../package.json')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/app/sub-vue2/',
  transpileDependencies: true,
  lintOnSave: false,
  // 配置devServer
  devServer: {
    host: "localhost", 
    port: 2222, 
    headers: {
      "Access-Control-Allow-Origin": "*", 
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    }
  },
})
