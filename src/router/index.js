import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import AboutFarm from "../views/AboutHavefarm.vue";
import FarmMap from "../views/FarmMap.vue";
import FarmShop from "../views/FarmShop.vue";

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
      name: "AboutFarm",
      component: AboutFarm,
    },
    {
      path: "/farmmap",
      name: "FarmMap",
      component: FarmMap,
    },
    {
      path: "/farmshop",
      name: "FarmShop",
      component: FarmShop,
    },
  ],
});

export default router;
