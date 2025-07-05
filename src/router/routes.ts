import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/main-layout.vue"),
    children: [{ path: "", component: () => import("pages/main-page.vue") }],
  },
];

export default routes;
