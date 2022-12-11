<script setup>

</script>
<template>
  <div class="container-lg">
    <nav
      class="
        navbar navbar-expand-lg navbar-light
        bg-light
        border-5 border-bottom border-mainred
        py-4
        fixed-top
      "
    >
      <div class="container-lg">
        <h1 class="mb-0">
          <router-link class="logo" :to="{ name: '首頁' }">饗農</router-link>
        </h1>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
// logo h1樣式
.logo {
  background-image: url('@/assets/images/logo-light.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
  width: 90px;
  height: 45px;
  display: block;
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
  transition: 0.2s;

  &:hover {
    background-image: url('@/assets/images/logo-dark.png');
    transition: 0.2s;
  }
}
</style>
