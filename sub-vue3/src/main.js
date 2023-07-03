import './public-path';
import '@/assets/styles/index.scss'
import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createRouter, createWebHistory } from 'vue-router'



let router = null;
let instance = null;
let history = null;

function render(props = {}) {
    const { container } = props;
    history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? "/app/sub-vue3" : "/");
    router = createRouter({
        history,
        routes,
    });

    instance = createApp(App);
    instance.use(router);
    // instance.use(store);
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        instance.component(key, component)
      }
    instance.mount(container ? container.querySelector("#app") : "#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('%c%s', 'color: green;', 'vue3.0 app bootstraped');
}


export async function mount(props) {
    // storeTest(props);
    render(props);
    instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
    instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
    instance.unmount();
    instance._container.innerHTML = '';
    instance = null;
    router = null;
    history.destroy();
}