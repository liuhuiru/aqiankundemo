import { createApp } from "vue";
import { router } from "@/router";
import { registerMicroApps, start, setDefaultMountApp } from "qiankun";
import { createPinia } from 'pinia';
import App from "./App.vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import registerAppConfig from "@/common/config/registerAppConfig.js";


const pinia = createPinia()
const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router);
app.use(pinia);
app.mount("#app");


registerMicroApps(registerAppConfig, {
  beforeLoad: (app) => {
    console.log("before load app.name====>>>>>", app.name, app);
  },
  beforeMount: [
    (app) => {
      console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
    },
  ],
  afterMount: [
    (app) => {
      console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
    },
  ],
  afterUnmount: [
    (app) => {
      console.log("[LifeCycle] after unmount %c%s", "color: green;", app.name);
    },
  ],
});
