const { defineConfig } = require('@vue/cli-service')
const { name } = require('../package.json')

module.exports = defineConfig({
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
