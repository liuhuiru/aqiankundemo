export const routes = [
    {
      path: "/",
      component: () => import("@/views/Content.vue"),
    },
    {
      path: "/child",
      component: () => import("@/views/Child.vue"),
    },
  ];