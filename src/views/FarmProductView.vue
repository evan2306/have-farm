<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';

const route = useRoute();

const pathId = route.params.id;
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
});

const getProduct = () => {
  axios
    .get(
      `${import.meta.env.VITE_APP_URL}api/${
        import.meta.env.VITE_APP_PATH
      }/product/${pathId}`,
    )
    .then((res) => {
      console.log(route.params.id);
      console.log(res.data);
      product.value = res.data.product;
      console.log('product.value', product.value);
    })
    .catch((err) => {
      console.log(err);
    });
};
getProduct();

const modules = [Thumbs, FreeMode, Navigation];
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
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
                :src="product.imgUrl"
                :alt="`${product.title}主圖`"
              />
            </swiper-slide>
            <swiper-slide
              v-for="(item, index) in product.imagesUrl"
              :key="index + 23145"
            >
              <img class="productImgShow"
              :src="item"
              :alt="`${product.title}+${index}`"/>
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
              <img class="productImgBar" :src="product.imgUrl" />
            </swiper-slide>
            <swiper-slide
              v-for="(item, index) in product.imagesUrl"
              :key="index + 38290189"
            >
              <img class="productImgBar" :src="item" />
            </swiper-slide>

          </swiper>
        </div>
      </div>
      <div class="col-md-7">
        <h1></h1>
        <div class="describe-box">
          <p>
            ★紫錐菊定期補充顯著提升保護力、調整體質<br />
            ★【專利紫錐萃取＋耐熱益生菌＋維他命Ｃ】<br />
            ★每包含「總咖啡酸衍生物3570μg」<br />
            ★使用美國有機『EMUNEPOWER專利紫錐菊』萃取<br />
            ★無添加人工香料、色素、防腐劑 ★無農藥、無西藥、無重金屬、無塑化劑<br />
          </p>
        </div>
        <h3 class="price">$1000<span>/每公斤</span></h3>
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
                <strong>優惠折扣中</strong>
              </div>
            </div>

            <div
              class="
                row row-cols-2
                justify-content-around
                align-items-center
                mt-4
              "
            >
              <div class="">
                <div class="input-group">
                  <button
                    class="btn btn-outline-mainred"
                    type="button"
                    id="button-addon1"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    disabled
                    class="form-control text-center"
                    placeholder=""
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    value="1"
                  />
                  <button
                    class="btn btn-outline-mainred"
                    type="button"
                    id="button-addon1"
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="div text-center">
                <button class="btn btn-mainred text-mainyellow w-100">
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
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
            商品介紹
          </div>
          <div
            class="tab-pane"
            id="itemContent"
            role="tabpanel"
            aria-labelledby="itemContentTab"
          >
            產品內容
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
  outline: 1px solid #000;
}
.bread-mt {
  margin-top: 82px;
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
}
</style>
