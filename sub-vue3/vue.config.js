const { defineConfig } = require("@vue/cli-service");
const { name } = require("../package.json");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/app/sub-vue3/',
  transpileDependencies: true,
  lintOnSave: false,
  // 配置devServer
  devServer: {
    host: "localhost", // 项目运行的ip
    port: 3333, // 项目运行的端口号
    headers: {
      "Access-Control-Allow-Origin": "*", // 配置跨域
    },
  },
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: "umd",
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
    plugins: [
      //element-plus自动导入
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
