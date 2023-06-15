import { createApp } from "vue";
import App from "./App.vue";
import { routes } from "@/router";
import {createRouter, createWebHistory}from 'vue-router'

import { registerMicroApps, start } from "qiankun";

const router = createRouter({
  //history路由
  history: createWebHistory(),
  routes,
});


const app = createApp(App);
app.use(router);
app.mount("#app");


registerMicroApps([
  {
    name: "vue3 app", // app name registered
    entry: "/localhost:3333",
    //子应用容器
    //若为主应用，main.js会获取<router-view/>中的资源
    //若为子应用，main.js忽略<router-view/>中的资源，获取id为container中的资源
    container: "#appContainer",
    activeRule: "/vue3app",
  },
]);

start();