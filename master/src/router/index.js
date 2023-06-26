import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/app/sub-vue3/",
  },
  {
    path: "/",
    component: () => import("@/views/nav.vue"),
    children: [
      {
        path: "/app/:pathMatch(.*)",
        name: "app",
        component: () => import("@/views/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login.vue"),
  },
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

router.beforeEach((to, from, next) => {
  // console.log('routechange', to.path, from.path)
  if(to.path === '/login'){
    next()
  }else if (!localStorage.getItem('token')) {
    next('/login')
  }else {
    next()
  }
})

