const { defineConfig } = require("@vue/cli-service");
const { name } = require('../package.json')

module.exports = defineConfig({
  publicPath: '/app/sub-vue3',
  transpileDependencies: true,
  lintOnSave: false,
  // 配置devServer
  devServer: {
    host: "localhost", // 项目运行的ip
    port: 3333, // 项目运行的端口号
    headers: {
      "Access-Control-Allow-Origin": "*", // 配置跨域
    }
  },
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: "umd",
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    }
  },
});
