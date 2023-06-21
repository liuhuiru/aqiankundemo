import { createRouter, createWebHistory } from "vue-router";
// import NProgress from 'nprogress';

const routes = [
  // {
  //   path: "/",
  //   // redirect: "/app/sub-vue3/",
  // },
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
  console.log('routechange', to.path, from.path)
  if(to.path === '/login'){
    // NProgress.start();
    next()
  }else if (!localStorage.getItem('token')) {
    next('/login')
  }else {
    // NProgress.start();
    next()
  }
})

// router.afterEach((to, from, failure) => {
//   if(to.path === '/login')
//   NProgress.done();
// })
