import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/FrontView.vue'),
      children: [
        {
          path: '',
          name: '首頁',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: 'about',
          name: '關於饗農',
          component: () => import('../views/AboutHavefarm.vue'),
        },
        {
          path: 'news',
          name: '最新消息',
          component: () => import('../views/FarmNews.vue'),
        },
        {
          path: 'farmmap',
          name: '饗農地圖',
          component: () => import('../views/FarmMap.vue'),
        },
        {
          path: 'farmshop',
          name: '響農商城',
          component: () => import('../views/FarmShop.vue'),
        },
        {
          path: 'farmshop/:id',
          name: '響農商品頁',
          component: () => import('../views/FarmProductView.vue'),
        },
        {
          path: 'farmcart',
          name: '購物車',
          component: () => import('../views/FarmCart.vue'),
        },
      ],
    },
    {
      path: '/admin',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: 'adminproduct',
          component: () => import('../views/AdminProductEdit.vue'),
        },
      ],
    },
  ],
});

export default router;
