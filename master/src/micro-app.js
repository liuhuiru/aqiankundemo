const registerAppConfig = [
  {
    name: "sub-vue3",
    entry: process.env.VUE_APP_SUB_VUE,
    container: "#appContainer",
    activeRule: "/app/sub-vue3",
  },
  {
    name: "sub-vue2", 
    entry: process.env.VUE_APP_SUB_VUE2,
    container: "#appContainer",
    activeRule: "/app/sub-vue2",
  },
];

export default registerAppConfig;
