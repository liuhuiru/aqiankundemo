const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: () => import("@/layouts/index.vue"),
    children: [
      {
        path: "home",
        name: 'home',
        component: () => import("@/views/home.vue"),
      },
      {
        path: "/element/form",
        name: 'form',
        component: () => import("@/views/element/form.vue"),
      },
      {
        path: "/element/table",
        name: 'table',
        component: () => import("@/views/element/table.vue"),
      },
      {
        path: "/tablev2",
        name: 'tablev2',
        component: () => import("@/views/element/tablev2.vue"),
      },
    ],
  },
];

export default routes;
