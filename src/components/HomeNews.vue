<script setup>
const newsData = reactive([
  {
    title: "饗農安心購",
    date: "2022.01.01",
    describe:
      "本公司產品均有經過機關認證，請消費者安心購買!，如有任何需要提供證明的消費者，均可透過本公司客服(含電話、傳真、社群)獲得。若有任何問題請洽客服",
  },
  {
    title: "夏日FUN饗宴",
    date: "2022.07.01",
    describe:
      "歡慶放暑假!即日起，凡購買酪農產品滿3000元，即送彗星牧場入場券一張(每帳號限2名)，限量3000名額，動作要快!",
  },
  {
    title: "618年中慶，饗農大放送",
    date: "2022.06.18",
    describe:
      "歡慶618年中慶，即日起至6月20號，至饗農商城或蟹皮官方線上商城，消費滿1000即送100元折價券(每帳戶限一筆)，數量有限動作要快!",
  },
  {
    title: "划龍舟、饗端午",
    date: "2022.05.15",
    describe:
      "媽媽們準備端午辛苦了!為體恤媽媽，饗編幫大家爭取到優惠，讓大家開心過端午還能省荷包! 即日起至5月20日止，凡購買米類、肉類標籤商品，即可享買二送一折扣，此次優惠不限筆數，讓媽媽買得開心，吃的放心!",
  },
]);
</script>
<template>
  <header class="container-lg">
    <section
      class="news-section pt-48 pb-32 row justify-content-center align-items-center"
    >
      <h2
        class="col-12 mb-lg-32 mb-16 text-center fs-32 lh-base fw-bolder text-mainred"
      >
        最新消息
      </h2>
      <ul class="news list-unstyled col-xl-8 col-12 mb-0">
        <li class="mb-32">
          <div class="news-box mb-4" v-for="news in newsData" :key="news.title">
            <div
              class="news-top d-flex text-center text-mainred align-items-center"
            >
              <h5 class="fs-20 lh-base me-3 mb-0 fw-bolder">
                {{ news.title }}
              </h5>
              <h6 class="fw-bold mb-0 fs-14 lh-base">{{ news.date }}</h6>
            </div>
            <div
              class="news-bottom d-flex flex-wrap flex-lg-nowrap justify-content-start"
            >
              <p class="lh-lg text-mainred m-0 news-text fw-semibold">
                {{ news.describe }}
              </p>
              <button type="button" class="news-btn fw-bolder ms-lg-2">
                more
              </button>
              <div class="new-"></div>
            </div>
          </div>
          <div class="news-border-bottom"></div>
        </li>
      </ul>
    </section>
  </header>
</template>
<style lang="scss" scoped>
.news-box {
  padding-left: 16px;
  border-left: 4px solid #460303;
}

.news-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @include lg {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

.news-border-bottom {
  width: 100%;
  height: 1px;
  background-color: #ababab;
}
.news-btn {
  color: #ec7e49;
  border: none;
  background-color: white;
  font-weight: 500;
  border: 1px solid #fde47f00;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    background-color: #ec7e49;
    border: 1px solid #fde47f;
    transition: 0.2s;
    color: #fde47f;
    transform: translate(0, -3px);
  }
}
</style>
