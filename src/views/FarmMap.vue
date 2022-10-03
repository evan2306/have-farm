<script setup>
import LayoutFooter from '@/components/LayoutFooter.vue';
</script>
<template>
  <div class="bread-mt container-lg pt-16">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page">\饗農地圖</li>
      </ol>
    </nav>
  </div>
  <section class="container-lg">
    <div class="row justify-content-center">
      <div class="aria-map col-2">
        <label for="ariaMap" class="fs-14">依地區挑選</label>
        <select
          id="ariaMap"
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>全部</option>
          <option value="1">北部</option>
          <option value="2">中部</option>
          <option value="3">南部</option>
          <option value="3">東部</option>
          <option value="3">離島</option>
        </select>
      </div>
      <div class="product-map col-2">
        <label for="productMap" class="fs-14">依產品挑選</label>
        <select
          id="productMap"
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>全部</option>
          <option value="1">肉類</option>
          <option value="2">蛋品</option>
          <option value="3">乳品</option>
          <option value="3">稻米</option>
          <option value="3">蔬果</option>
          <option value="3">水產</option>
        </select>
      </div>
    </div>
    <div class="row mt-48 mb-64">
      <div class="col-12 col-md-8 border-2 border">
        <div>
          <img
            src="../assets/images/廚畜豬肉食品加工廠.png"
            alt=""
            class="w-100 map-img"
          />
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div
          class="
            d-flex
            h-100
            justify-content-center
            align-items-center
            border-2 border
          "
        >
          <p>請點選右側地圖圖標，或篩選後再進行點選</p>
        </div>
      </div>
    </div>
  </section>
  <LayoutFooter />
</template>
<style lang="scss" scoped>
.bread-mt {
  margin-top: 82px;
  @include lg {
    margin-top: 88px;
  }
}
.map-img {
  object-fit: cover;
  height: 600px;
}
</style>
