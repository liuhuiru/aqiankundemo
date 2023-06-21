const registerAppConfig = [
  {
    name: "sub-vue3", // app name registered
    entry: process.env.VUE_APP_SUB_VUE,
    //子应用容器
    //若为主应用，main.js会获取<router-view/>中的资源
    //若为子应用，main.js忽略<router-view/>中的资源，获取id为container中的资源
    container: "#appContainer",
    activeRule: "/app/sub-vue3",
    // sandbox: {
    //   strictStyleIsolation: true, // 开启样式隔离
    // },
  },
  {
    name: "sub-vue2", 
    entry: process.env.VUE_APP_SUB_VUE2,
    container: "#appContainer",
    activeRule: "/app/sub-vue2",
    // sandbox: {
    //   strictStyleIsolation: true, 
    // },
  },
];

export default registerAppConfig;
