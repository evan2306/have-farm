import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主頁',
      component: () => import('../views/FrontView.vue'),
      redirect: '首頁',
      meta: {
        title: '首頁',
      },
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
          meta: {
            title: '關於饗農',
          },
        },
        {
          path: 'news',
          name: '最新消息',
          component: () => import('../views/FarmNews.vue'),
          meta: {
            title: '最新消息',
          },
        },
        {
          path: 'farmmap',
          name: '饗農地圖',
          component: () => import('../views/FarmMap.vue'),
          meta: {
            title: '饗農地圖',
          },
        },
        {
          path: 'farmshop',
          name: '響農商城',
          component: () => import('../views/FarmShop.vue'),
          meta: {
            title: '響農商城',
          },
        },
        {
          path: 'farmshop/:id',
          name: '響農商品頁',
          component: () => import('../views/FarmProductView.vue'),
          meta: {
            title: '響農商品頁',
          },
        },
        {
          path: 'farmcart',
          name: '購物車',
          component: () => import('../views/FarmCart.vue'),
          meta: {
            title: '購物車',
          },
        },
      ],
    },
    {
      path: '/adminlogin',
      name: '後台登入',
      component: () => import('../views/DashboradLogin.vue'),
    },
    {
      path: '/admin',
      name: '後台',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: '',
          name: '商品編輯',
          component: () => import('../views/AdminProductEdit.vue'),
        },
      ],
    },
  ],
});

export default router;
