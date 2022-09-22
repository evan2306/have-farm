import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "關於饗農",
      component: () => import("../views/AboutHavefarm.vue"),
    },
    {
      path: "/news",
      name: "最新消息",
      component: () => import("../views/FarmNews.vue"),
    },
    {
      path: "/farmmap",
      name: "饗農地圖",
      component: () => import("../views/FarmMap.vue"),
    },
    {
      path: "/farmshop",
      name: "響農商城",
      component: () => import("../views/FarmShop.vue"),
    },
  ],
});

export default router;
