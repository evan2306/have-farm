<script setup>
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
// const route = useRoute();

// const pathId = route.params.id;
// const product = reactive([]);
// const getProduct = () => {
//   axios
//     .get(
//       `${import.meta.env.VITE_APP_URL}api/${
//         import.meta.env.VITE_APP_PATH
//       }/product/${pathId}`,
//     )
//     .then((res) => {
//       // console.log(route.params.id);
//       // console.log(res.data);
//       product.values = res.data.product;
//       console.log('product.values', product.values);
//     });
// };

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';

const modules = [Thumbs, FreeMode, Navigation];

const bigImg = reactive([
  'https://t7.baidu.com/it/u=3165657288,4248157545&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2942499027,2479446682&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2610975262,3538281461&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=4138158235,3956816634&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2942499027,2479446682&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=2610975262,3538281461&fm=193&f=GIF',
  'https://t7.baidu.com/it/u=4138158235,3956816634&fm=193&f=GIF',
]);
const thumbsSwiper2 = ref(null);

const setThumbsSwiper2 = (swiper) => {
  thumbsSwiper2.value = swiper;
};

</script>

<template>
  <div class="bread-mt container-lg pt-16 mt-32">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page">\饗農商城</li>
      </ol>
    </nav>
  </div>

  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :spaceBetween="10"
    :thumbs="{ swiper: thumbsSwiper2 }"
    :modules="modules"
    class="mySwiper2"
    :loop="true"
    :navigation="true"
  >
    <swiper-slide v-for="(item, index) of bigImg" :key="index">
      <img class="img" :src="item" />
    </swiper-slide>
  </swiper>

  <swiper
    @swiper="setThumbsSwiper2"
    :loop="true"
    :spaceBetween="10"
    :slidesPerView="5"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(item, index) of bigImg" :key="index">
      <img class="img" :src="item" />
    </swiper-slide>

  </swiper>

  <!-- <swiper
    :spaceBetween="10"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="mySwiper2"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
  >
  <div class="swiper-button-next swiper-button-white"></div>
  <div class="swiper-button-prev swiper-button-black"></div>
    <swiper-slide v-for="(item, index) of bigImg" :key="index">
      <img class="img" :src="item" />
    </swiper-slide>
  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="10"
    :slidesPerView="3"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(item, index) of bigImg" :key="index">
      <img class="img" :src="item" />
    </swiper-slide>
  </swiper> -->

</template>
<style lang="scss" scoped>
.bread-mt {
  margin-top: 82px;
}
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
