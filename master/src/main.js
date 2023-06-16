import { createApp } from "vue";
import App from "./App.vue";
import { router } from "@/router";
import { registerMicroApps, start } from "qiankun";



const app = createApp(App);
app.use(router);
app.mount("#app");


registerMicroApps([
  {
    name: "sub-vue3", // app name registered
    entry: process.env.VUE_APP_SUB_VUE,
    //子应用容器
    //若为主应用，main.js会获取<router-view/>中的资源
    //若为子应用，main.js忽略<router-view/>中的资源，获取id为container中的资源
    container: "#appContainer",
    // activeRule: "/app/sub-vue3",
    activeRule: "/sub-vue3"
  },
]);
// setDefaultMountApp('/sub-vue3')
start();