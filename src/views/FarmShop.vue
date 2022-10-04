<script setup>
import LayoutFooter from '@/components/LayoutFooter.vue';
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';

const product = ref([]);

const getProduct = () => {
  axios
    .get(
      `${import.meta.env.VITE_APP_URL}api/${
        import.meta.env.VITE_APP_PATH
      }/products/all`,
    )
    .then((res) => {
      product.value = res.data;
    });
};

onMounted(() => {
  getProduct(product.value);
});
const seasonItem = reactive([
  {
    season: true,
    hotItem: false,
    title: '屏東高級玉荷包',
    farm: '荔貴妃',
    price: 285,
    unit: '每台斤',
    imgUrl:
      'https://github.com/piskesocute/have-farm/blob/main/src/assets/images/lichi.png?raw=true',
  },
  {
    season: true,
    hotItem: false,
    title: '宜蘭特選三星蔥',
    farm: '蔥動',
    price: 99,
    unit: '200g',
    imgUrl:
      'https://github.com/piskesocute/have-farm/blob/main/src/assets/images/green%20onion.jpg?raw=true',
  },
  {
    season: true,
    hotItem: false,
    title: '台農22號蜜香',
    farm: '與鳳有約',
    price: 150,
    unit: '顆',
    imgUrl:
      'https://github.com/piskesocute/have-farm/blob/main/src/assets/images/pineapple.jpg?raw=true',
  },
  {
    season: true,
    hotItem: false,
    title: '極品綠竹筍',
    farm: '心田山',
    price: 120,
    unit: '每台斤',
    imgUrl:
      'https://github.com/piskesocute/have-farm/blob/main/src/assets/images/bamboo%20shoots.png?raw=true',
  },
  {
    season: false,
    hotItem: true,
    title: 'HTST 高溫殺菌鮮乳',
    farm: '彗星牧場',
    price: 120,
    unit: '1850ml',
    imgUrl:
      'https://github.com/piskesocute/have-farm/blob/main/src/assets/images/milk.png?raw=true',
  },
  {
    season: false,
    hotItem: true,
    title: '台東22年二期稻新米',
    farm: '樂下土',
    price: 200,
    unit: '2KG',
    imgUrl:
      'https://github.com/piskesocute/have-farm/blob/main/src/assets/images/rice.png?raw=true',
  },
  {
    season: false,
    hotItem: false,
    title: '伊比利豬德式香腸',
    farm: '廚畜',
    price: 150,
    unit: '4條',
    imgUrl:
      'https://github.com/piskesocute/have-farm/blob/main/src/assets/images/hotdog.png?raw=true',
  },
  {
    season: false,
    hotItem: false,
    title: '黑豬肉香腸',
    farm: '廚畜',
    price: 200,
    unit: '6條',
    imgUrl:
      'https://github.com/piskesocute/have-farm/blob/main/src/assets/images/sausage.png?raw=true',
  },
]);
</script>
<template>
  <div class="bread-mt container-lg pt-16">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page">\饗農商城</li>
      </ol>
    </nav>
  </div>
  <main>
    <div class="container-lg">
      <ul class="nav nav-tabs d-flex justify-content-center text-center w-100">
        <li class="nav-item w-25">
          <a
            class="nav-link nav-link-active nav-border rounded-top-4"
            aria-current="page"
            href="#"
            >全部商品</a
          >
        </li>
        <li class="nav-item w-25 nav-border rounded-top-4">
          <a class="nav-link" href="#">精選熱銷</a>
        </li>
        <li class="nav-item w-25 nav-border rounded-top-4">
          <a class="nav-link" href="#">季節商品</a>
        </li>
        <li class="nav-item w-25 nav-border rounded-top-4">
          <a class="nav-link" href="#">米麥產品</a>
        </li>
        <li class="nav-item w-25 nav-border rounded-top-4">
          <a class="nav-link" href="#">蔬果產品</a>
        </li>
        <li class="nav-item w-25 nav-border rounded-top-4">
          <a class="nav-link" href="#">肉類產品</a>
        </li>
        <li class="nav-item w-25 nav-border rounded-top-4">
          <a class="nav-link" href="#">乳蛋產品</a>
        </li>
        <li class="nav-item w-25 nav-border rounded-top-4">
          <a class="nav-link" href="#">水產產品</a>
        </li>
      </ul>
      <div class="row mt-48 g-24">
        <div
          class="col-12 col-sm-6 col-lg-3"
          v-for="(item, idx) in product.value"
          :key="idx"
        >
          <div
            class="
              card
              border-0
              rounded-4
              season-item-card
              rounded-top-16
              h-100
            "
          >
            <div class="card-top w-100 p-16 position-relative">
              <img
                :src="item.imagesUrl[0]"
                class="cart-card-img mx-auto d-block"
                alt="商品圖片"
              />
              <div
                class="position-absolute h-25 top-0 end-0 d-flex flex-column"
              >
                <span class="badge bg-mainorg card-Badges" v-if="item.season">
                  季節限定
                </span>
                <span
                  class="badge bg-success card-Badges"
                  v-else-if="item.hotItem"
                >
                  精選熱銷
                </span>
              </div>
            </div>

            <div class="card-body mt-8 px-22 py-0 text-mainred">
              <h5 class="mb-0 fs-20 lh-base fw-bold">{{ item.category }}</h5>
              <p class="fs-16 lh-base mb-8 fw-bold">{{ item.title }}</p>
              <p class="fs-20 lh-base mb-8 fw-bold text-end">
                NT${{ item.price }}/ <span class="fs-14">{{ item.unit }}</span>
              </p>
            </div>
            <div class="card-footer border-0 p-0 rounded-bottom-16">
              <router-link
                :to="`/farmshop/${item.id}`"
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
                  stretched-link
                "
                :disabled="!item.is_enabled"
              >
                立即購買
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="col-12 col-sm-6 col-lg-3"
          v-for="(item, idx) in seasonItem"
          :key="idx"
        >
          <div class="card border-0 rounded-4 season-item-card rounded-top-16">
            <div class="card-top w-100 p-16 position-relative">
              <img
                :src="item.imgUrl"
                class="cart-card-img mx-auto d-block"
                alt="商品圖片"
              />
              <div
                class="position-absolute h-25 top-0 end-0 d-flex flex-column"
              >
                <span class="badge bg-mainorg card-Badges" v-if="item.season">
                  季節限定
                </span>
                <span
                  class="badge bg-success card-Badges"
                  v-else-if="item.hotItem"
                >
                  精選熱銷
                </span>
              </div>
            </div>

            <div class="card-body mt-8 px-22 py-0 text-mainred">
              <h5 class="mb-0 fs-20 lh-base fw-bold">{{ item.farm }}</h5>
              <p class="fs-16 lh-base mb-8 fw-bold">{{ item.title }}</p>
              <p class="fs-20 lh-base mb-8 fw-bold text-end">
                NT${{ item.price }}/ <span class="fs-14">{{ item.unit }}</span>
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
                  stretched-link
                "
              >
                立即購買
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <section class="container-lg pt-48 pb-24 d-flex justify-content-center">
    <nav aria-label="Page navigation ">
      <ul class="pagination mb-0">
        <li class="page-item">
          <a class="page-link text-mainred" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link text-mainred" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link text-mainred" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link text-mainred" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link text-mainred" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
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

.nav-link {
  color: #460303;
}

.nav-link-active {
  background-color: #460303;
  color: #fde47f;
  font-weight: bold;
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
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #fde47f;
    color: #460303;
    transition: 0.2s;
  }
}

.card-Badges {
  top: 0;
  right: 0;
  border-radius: 4px;
  clip-path: polygon(100% 0%, 90% 50%, 100% 100%, 0 100%, 0 0);
  padding-right: 16px;
  padding-left: 16px;
}

.nav-border {
  border-color: #460303;
  border-top: 1px solid;
  border-right: 1px solid;
  border-left: 1px solid;
}
</style>
