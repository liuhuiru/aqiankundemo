import { createApp } from "vue";
import App from "./App.vue";
import { routes } from "@/router";
import { createRouter, createWebHistory } from "vue-router";

let router = null
let instance = null

function render({ container } = {}){
  router = createRouter({
    routes,
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/child' : '/'),
    base: window.__POWERED_BY_QIANKUN__ ? '/child' : '/'
  })
    
  instance = createApp(App)
  instance.use(router).mount('#app')
}

// 如果是单独启动的子文件，保证仍能正常运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 生命周期的钩子函数
// 导出第一次进入当前子应用的钩子函数
export async function bootstrap() {
  console.log('第一次进入admin')
}

// 导出每次创建挂载时的钩子函数
export async function mount(props) {
  console.log("创建挂载组件")
  render(props)
}

// 导出每次销毁时的钩子函数
export async function unmount(props) {
  console.log("销毁组件")
  instance.unmount()
  instance._container.innerHTML = ''
  instance = null
  router = null
}

