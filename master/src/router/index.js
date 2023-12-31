import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/app/sub-vue3/",
    
  },
  {
    path: "/",
    component: () => import("@/layouts/index.vue"),
    children: [
      {
        path: "/app/:pathMatch(.*)",
        name: "app",
        component: () => import("@/views/app/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/user/login.vue"),
  }
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

