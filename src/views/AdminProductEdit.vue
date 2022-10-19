<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
// 跨域資料
import { useModalStore } from '@/stores/modal';

import { useDataStore } from '../stores/saveData';
// 元件
import { useCheckLogin } from '../composables/useCheckLogin';
import ProductModal from '../components/ComponentProductModal.vue';
import { usePushProduct } from '../composables/usePushProduct';
// 取得商品資料
const dataStore = useDataStore();
const { productData } = storeToRefs(dataStore);
const { getProduct, deleteAction } = usePushProduct();

// 檢查進入時是否有token
const { checkLogin } = useCheckLogin();
const checkLoginInProduct = async () => {
  await checkLogin();
  await getProduct();
};

// pinia product modal物件
const store = useModalStore();
// eslint-disable-next-line no-unused-vars
const { addProduct, closeModal, creatProductModal } = store;
const { isProductModal } = storeToRefs(store);

onMounted(() => {
  checkLoginInProduct();
  creatProductModal();
});

</script>
<template>
  <ProductModal ref="isProductModal" />
  <div class="container-lg">
    <div class="row justify-content-end mb-3">
      <div class="col-2">
        <button
          type="button"
          class="btn btn-primary w-100"
          @click="addProduct('isNew')"
        >
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
        <tr v-for="(item, idx) in productData" :key="item.id" class="">
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
              <button
                type="button"
                class="btn btn-primary"
                @click="addProduct('edit', item)"
              >
                編輯
              </button>
              <button type="button"
              class="btn btn-outline-danger"
              @click="deleteAction(item)">刪除</button>
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
