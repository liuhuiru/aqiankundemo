const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置devServer
  devServer: {
    host: "localhost", // 项目运行的ip
    port: 8080, // 项目运行的端口号
    client: {
      overlay: false
    }
  },
  configureWebpack: {
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
