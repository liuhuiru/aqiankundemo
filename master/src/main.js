import { createApp } from "vue";
import App from "./App.vue";
import { routes } from "@/router";
import {createRouter,createWebHistory}from 'vue-router'

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
    container: "#appContainer",
    activeRule: "/vue3app",
  },
]);

start();