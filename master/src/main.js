import { createApp } from "vue";
import { router } from "@/router";
import { registerMicroApps, start, setDefaultMountApp } from "qiankun";
import { createPinia } from 'pinia';
import { useStore } from "@/store";
import App from "./App.vue";
import registerAppConfig from "./micro-app.js";
// import 'nprogress/nprogress.css'


const pinia = createPinia()
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");

//loader加载进度
const store = useStore();
function loader(loading) {
  if(store){
    store.isLoading = loading
  }
}

const apps = registerAppConfig.map((item) => {
  return {
    ...item,
    loader,
  };
});

registerMicroApps(apps, {
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
start();
