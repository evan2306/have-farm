<script setup>
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';

import { storeToRefs } from 'pinia';
import { useClientProduct } from '../composables/useClientProduct';
import { useDataStore } from '../stores/saveData';

const dataStore = useDataStore();
const { productData } = storeToRefs(dataStore);
const { getClientProduct, addCart } = useClientProduct();

// 輪播
const modules = [Thumbs, FreeMode, Navigation];
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
// 計算加入購物車的數量
const productQty = ref(1);
const addCartCount = (count) => {
  const nowCount = productQty.value + count;
  if (nowCount <= productData.value.qty && nowCount > 0) {
    productQty.value = nowCount;
  }
};

const addToCart = async (id, title) => {
  try {
    const res1 = await addCart(id, title, productQty.value);
    const res2 = await getClientProduct();
    console.log('最外層', {
      接收api回傳結果: res1,
      執行重新讀取api結果: res2,
    });
    productQty.value = 1;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getClientProduct();
});
const product = ref({
  imgUrl: '',
  imagesUrl: [''],
  title: '',
  category: '',
  unit: '',
  origin_price: 0,
  price: 0,
  aria: '',
  farm: '',
  description: '',
  content: '',
  is_enabled: 1,
  is_special: 0,
  qty: 0,
});
</script>

<template>
  <div class="bread-mt container-lg pt-16 mt-80">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page">
          首頁>饗農商城>產品頁
        </li>
      </ol>
    </nav>
  </div>
  <div class="container-lg">
    <div class="row">
      <div class="col-md-5">
        <div class="sticky-top">
          <swiper
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="mySwiper2"
          >
            <swiper-slide>
              <img
                class="productImgShow"
                :src="productData.imgUrl"
                :alt="`${productData.title}主圖`"
              />
            </swiper-slide>
            <swiper-slide
              v-for="(item, index) in productData.imagesUrl"
              :key="index + 23145"
              v-show="item !== ''"
            >
              <img
                class="productImgShow"
                :src="item"
                :alt="`${productData.title}+${index}`"
              />
            </swiper-slide>
          </swiper>
          <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="4"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide>
              <img class="productImgBar" :src="productData.imgUrl" />
            </swiper-slide>

            <swiper-slide
              v-for="(item, index) in productData.imagesUrl"
              :key="index + 38290189"
              v-show="item !== ''"
            >
              <img class="productImgBar" :src="item" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="col-md-7">
        <h2 class="p-2">{{ productData.title }}</h2>
        <div
          class="describe-box px-2 py-4"
          v-html="productData.description"
        ></div>
        <h5 class="price p-2">
          {{ productData.price }}元<span>/{{ productData.unit }}</span>
        </h5>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                優惠活動
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <strong>優惠折扣中{{ productData.on_sale }}</strong>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            row row-cols-2
            mb-16
            justify-content-around
            align-items-center
            mt-4
          "
        >
          <div class="">
            <div class="input-group">
              <button
                class="btn btn-outline-mainred border-2 border"
                type="button"
                id="button-addon1"
                @click="addCartCount(-1)"
                :disabled="!productData.qty > 0"
              >
                -
              </button>
              <input
                type="number"
                readonly
                class="form-control text-center"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                v-model="productQty"
                v-if="productData.qty > 0"
              />
              <input
                type="number"
                disabled
                class="form-control text-center"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                value="0"
                v-else
              />
              <button
                class="btn btn-outline-mainred border-2 border"
                type="button"
                id="button-addon1"
                @click="addCartCount(+1)"
                :disabled="!productData.qty > 0"
              >
                +
              </button>
            </div>
          </div>
          <div class="div text-center">
            <button
              class="btn btn-mainred cart-btn fw-bold fs-18 w-100"
              @click="addToCart(productData.id, productData.title)"
              v-if="productData.qty > 0"
            >
              加入購物車
            </button>
            <button
              class="btn btn-mainred cart-btn fw-bold fs-18 w-100"
              disabled
              v-else
            >
              商品已售完
            </button>
          </div>
        </div>
        <hr />
        <ul class="nav nav-tabs mt-32" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="itemDescriptionTab"
              data-bs-toggle="tab"
              data-bs-target="#itemDescription"
              type="button"
              role="tab"
              aria-controls="itemDescription"
              aria-selected="true"
            >
              商品介紹
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="itemContentTab"
              data-bs-toggle="tab"
              data-bs-target="#itemContent"
              type="button"
              role="tab"
              aria-controls="itemContent"
              aria-selected="false"
            >
              產品內容
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="itemReturnTab"
              data-bs-toggle="tab"
              data-bs-target="#itemReturn"
              type="button"
              role="tab"
              aria-controls="itemReturn"
              aria-selected="false"
            >
              退換貨須知
            </button>
          </li>
        </ul>

        <div class="tab-content">
          <div
            class="tab-pane active"
            id="itemDescription"
            role="tabpanel"
            aria-labelledby="itemDescriptionTab"
          >
            <p v-html="productData.description"></p>
          </div>
          <div
            class="tab-pane"
            id="itemContent"
            role="tabpanel"
            aria-labelledby="itemContentTab"
          >
            產品內容{{ productData.content }}
          </div>
          <div
            class="tab-pane"
            id="itemReturn"
            role="tabpanel"
            aria-labelledby="itemReturnTab"
          >
            退換貨須知
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  // outline: 1px solid #000;
}
.bread-mt {
  margin-top: 82px;
}
.cart-btn {
  color: #fff;
  border-color: #fde47f;
}
.cart-btn:hover {
  color: #fde47f;
  background-color: #940707;
}

.productImgShow {
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: center center;
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

.productImgBar {
  display: block;
  width: 100%;
  height: 75px;
  object-fit: cover;
  cursor: pointer;
}
</style>
