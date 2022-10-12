<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { storeToRefs } from 'pinia';
import { useModalStore } from '@/stores/modal';

import ProductModal from '../components/ComponentProductModal.vue';
// 貯存api資料
const productList = ref([]);

// get api
const getProduct = () => {
  axios
    .get(
      `${import.meta.env.VITE_APP_URL}api/${
        import.meta.env.VITE_APP_PATH
      }/admin/products/all`,
    )
    .then((res) => {
      productList.value = Object.values(res.data.products);
    });
};

// checklogin token
const checkLogin = () => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)havefarmToken\s*\=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
  axios.defaults.headers.common.Authorization = token;
  axios
    .post(`${import.meta.env.VITE_APP_URL}api/user/check`)
    .then(() => {
      getProduct();
    })
    .catch(() => {
      // router.push({ path: '/adminlogin' });
    });
};

// pinia modal物件
const store = useModalStore();
// eslint-disable-next-line no-unused-vars
const { addProduct, closeModal, creatProductModal } = store;
const { isProductModal } = storeToRefs(store);

// 定義modal物件

// let productModal = null;
// const isProductModal = ref(null);
// const addProduct = () => {
//   productModal.show();
// };
// const closeModal = () => {
//   productModal.hide();
// };

onMounted(() => {
  checkLogin();
  creatProductModal();
  // productModal = new Modal(isProductModal.value.isModal, {
  //   backdrop: 'static',
  // });
});
</script>
<template>
  <ProductModal ref="isProductModal" />
  <div class="container-lg">
    <div class="row justify-content-end mb-3">
      <div class="col-2">
        <button type="button" class="btn btn-primary w-100" @click="addProduct">
          新增產品
        </button>
      </div>
    </div>
    <table class="table text-center align-middle">
      <thead>
        <tr>
          <th scope="col" width="5%"></th>
          <th scope="col" width="20%">商品圖片</th>
          <th scope="col">商品名稱</th>
          <th scope="col" width="15%">農場</th>
          <th scope="col" width="10%">價格</th>
          <th scope="col" width="10%">上架</th>
          <th scope="col" width="20%">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in productList" :key="item.id" class="">
          <th scope="row" class="">
            {{ idx + 1 }}
          </th>
          <td><img :src="item.imagesUrl[0]" alt="" class="itemimg" /></td>
          <td class="">
            <span class="table-word-overflow text-start fw-bold">{{
              item.title
            }}</span>
          </td>
          <td>{{ item.farm }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.is_enabled }}</td>
          <td>
            <div
              class="
                d-flex
                justify-content-around
                align-items-center
                flex-wrap
                gap-1
              "
            >
              <button type="button" class="btn btn-primary">編輯</button>
              <button type="button" class="btn btn-outline-danger">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
* {
  outline: 1px solid;
}
.itemimg {
  max-width: 50px;
  height: 50px;
}
.table-word-overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
