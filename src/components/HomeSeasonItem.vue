<script setup>
import { reactive } from 'vue';

const seasonItem = reactive([
  {
    title: '屏東高級玉荷包',
    farm: '荔貴妃',
    price: 285,
    unit: '每台斤',
    imgUrl:
      'https://github.com/piskesocute/have-farm/blob/main/src/assets/images/lichi.png?raw=true',
  },
  {
    title: '宜蘭特選三星蔥',
    farm: '蔥動',
    price: 99,
    unit: '200g',
    imgUrl:
      'https://github.com/piskesocute/have-farm/blob/main/src/assets/images/green%20onion.jpg?raw=true',
  },
  {
    title: '台農22號蜜香',
    farm: '與鳳有約',
    price: 150,
    unit: '顆',
    imgUrl:
      'https://github.com/piskesocute/have-farm/blob/main/src/assets/images/pineapple.jpg?raw=true',
  },
  {
    title: '極品綠竹筍',
    farm: '心田山',
    price: 120,
    unit: '每台斤',
    imgUrl:
      'https://github.com/piskesocute/have-farm/blob/main/src/assets/images/bamboo%20shoots.png?raw=true',
  },
]);
</script>
<template>
  <main class="pt-48 pb-64">
    <section class="container-lg">
      <h2
        class="
          w-100
          text-center
          fs-32
          lh-base
          fw-bolder
          text-mainred
          mb-24 mb-lg-32
        "
      >
        季節限定
      </h2>
      <div class="row row-cols-1 row-cols-md-4 gx-md-24 gx-0 gy-24 gy-lg-0">
        <div class="col" v-for="item in seasonItem" :key="item.title">
          <div class="card border-0 rounded-4 season-item-card rounded-top-16">
            <div class="card-top w-100 p-16">
              <img
                :src="item.imgUrl"
                class="cart-card-img mx-auto d-block"
                alt="商品圖片"
              />
            </div>

            <div class="card-body mt-8 px-22 py-0 text-mainred">
              <h5 class="mb-0 fs-20 lh-base fw-bold">{{ item.farm }}</h5>
              <p class="fs-16 lh-base mb-8 fw-bold">{{ item.title }}</p>
              <p class="fs-20 lh-base mb-8 fw-bold text-end">
                NT${{ item.price }}/{{ item.unit }}
              </p>
            </div>
            <div class="card-footer border-0 p-0 rounded-bottom-16">
              <button
                type="button"
                class="
                  w-100
                  border-0
                  py-16
                  fs-16
                  lh-base
                  rounded-bottom-16
                  fw-bold
                  goshop-btn
                "
              >
                立即購買
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style lang="scss" scoped>
.card {
  transition: 0.2s;
  &:hover {
    transform: translate(0, -3px);
    transition: 0.2s;
    box-shadow: 3px 3px 5px #00000044;
  }
}
.cart-card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center center;
}
.season-item-card {
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.1);
}
.goshop-btn {
  background-color: #460303;
  color: #fde47f;
  transition: 0.2s;
  &:hover {
    background-color: #fde47f;
    color: #460303;
    transition: 0.2s;
  }
}
</style>
