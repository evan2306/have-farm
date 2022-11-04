<script setup>
import { ref } from 'vue';
import axios from 'axios';

const cartData = ref({
  success: true,
  data: {
    carts: [
      {
        coupon: {
          code: '',
          due_date: 0,
          id: '',
          is_enabled: 0,
          percent: 0,
          title: '',
        },
        final_total: 0,
        id: '',
        product: {
          category: '',
          content: '',
          description: '',
          id: '',
          imageUrl: '',
          imagesUrl: [
            '',
          ],
          is_enabled: 1,
          num: 1,
          origin_price: 0,
          price: 0,
          title: '',
          unit: '',
        },
        product_id: '',
        qty: 1,
        total: 3600,
      },
    ],
    total: 3600,
    final_total: 3600,
  },
  messages: [],
});

const getCartData = async () => {
  axios.get(`${import.meta.env.VITE_APP_URL}api/${
    import.meta.env.VITE_APP_PATH
  }/cart`).then((res) => {
    cartData.value = res.data;
  });
};
getCartData();
</script>
<template>
    <div class="bread-mt container-lg pt-16">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page">首頁>饗農地圖</li>
      </ol>
    </nav>
  </div>
<h1>購物車</h1>
{{cartData}}
</template>

<style lang="scss" scoped>
.bread-mt {
  margin-top: 82px;
  @include lg {
    margin-top: 88px;
  }
}
</style>
