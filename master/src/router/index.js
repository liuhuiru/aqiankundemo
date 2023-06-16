import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/nav.vue"),
    children: [
      {
        path: "/sub-vue3",
        component: () => import("@/views/index.vue"),
      },
    ],
  },
  // {
  //   path: "/app/sub-vue3",
  //   name: "app",
  //   component: () => import("@/views/index.vue"),
  // },
  {
    path: "/about",
    component: () => import("@/views/login.vue"),
  },
];

export const router = createRouter({
  //history路由
  history: createWebHistory(),
  routes,
});
