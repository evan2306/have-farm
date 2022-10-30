<script setup>
// import { onMounted, ref } from 'vue';
// import axios from 'axios';
// import { useRouter } from 'vue-router';
// const productList = ref([]);

// const getProduct = () => {
//   axios
//     .get(
//       `${import.meta.env.VITE_APP_URL}api/${
//         import.meta.env.VITE_APP_PATH
//       }/admin/products/all`,
//     )
//     .then((res) => {
//       console.log(res.data);
//       productList.value = res.data;
//       console.log('productList.value', productList.value);
//     });
// };

// const checkLogin = () => {
//   const token = document.cookie.replace(
//     // eslint-disable-next-line no-useless-escape
//     /(?:(?:^|.*;\s*)havefarmToken\s*\=\s*([^;]*).*$)|^.*$/,
//     '$1',
//   );
//   axios.defaults.headers.common.Authorization = token;
//   axios
//     .post(`${import.meta.env.VITE_APP_URL}api/user/check`)
//     .then(() => {
//       getProduct();
//     })
//     .catch(() => {
//       alert('請重新登入');
//       // router.push({ path: '/adminlogin' });
//     });
// };

// onMounted(() => {
//   // checkLogin();
// });
</script>
<template>
  <div class="mb-64"></div>
  <nav class="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="text-white text-center" :to="{ name: '商品編輯' }">產品編輯</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- {{ productList }} -->
  <router-view></router-view>
</template>

<style></style>
