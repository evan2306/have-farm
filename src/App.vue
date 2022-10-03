<script setup>
console.log('環境變數=>', import.meta.env);
</script>

<template>
  <router-view> </router-view>
</template>

<style lang="scss">
// * {
//   outline: 1px solid #000;
// }
// 全站字體
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Microsoft JhengHei', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>
