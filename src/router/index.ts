import { defineRouter } from "#q-app/wrappers";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

export default defineRouter(function () {
  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createWebHistory(process.env.VUE_ROUTER_BASE),
  });

  return Router;
});
