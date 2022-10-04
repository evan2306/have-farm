<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const pathId = route.params.id;
const product = reactive([]);
const getProduct = () => {
  axios
    .get(
      `${import.meta.env.VITE_APP_URL}api/${
        import.meta.env.VITE_APP_PATH
      }/product/${pathId}`,
    )
    .then((res) => {
      // console.log(route.params.id);
      // console.log(res.data);
      product.values = res.data.product;
      console.log('product.values', product.values);
    });
};

onMounted(() => {
  getProduct();
});
</script>
<template>
  <div class="bread-mt container-lg pt-16">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page">\饗農商城</li>
      </ol>
    </nav>
    {{ product.values }}
  </div>
</template>
<style lang="scss" scoped>
</style>
