<script setup>
// const route = useRoute();
// onMounted(() => {
//   console.log("route", route);
// });
</script>
<template>
  <div class="bread-mt container-lg">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.bread-mt {
  margin-top: 82px;
  @include lg {
    margin-top: 88px;
  }
}
</style>
