<script setup>
const newsData = reactive([
  {
    title: "饗農安心購",
    date: "2022.01.01",
    describe:
      "本公司產品均有經過機關認證，請消費者安心購買!，如有任何需要提供證明的消費者，均可透過本公司客服(含電話、傳真、社群)獲得。若有任何問題請洽客服",
    imgUrl:
      "https://github.com/piskesocute/have-farm/blob/main/src/assets/images/nature.jpg?raw=true",
  },
  {
    title: "夏日FUN饗宴",
    date: "2022.07.01",
    describe:
      "歡慶放暑假!即日起，凡購買酪農產品滿3000元，即送彗星牧場入場券一張(每帳號限2名)，限量3000名額，動作要快!",
    imgUrl:
      "https://github.com/piskesocute/have-farm/blob/main/src/assets/images/summervaction%20.jpg?raw=true",
  },
  {
    title: "618年中慶，饗農大放送",
    date: "2022.06.18",
    describe:
      "歡慶618年中慶，即日起至6月20號，至饗農商城或蟹皮官方線上商城，消費滿1000即送100元折價券(每帳戶限一筆)，數量有限動作要快!",
    imgUrl:
      "https://github.com/piskesocute/have-farm/blob/main/src/assets/images/618shopping.jpg?raw=true",
  },
  {
    title: "划龍舟、饗端午",
    date: "2022.05.15",
    describe:
      "媽媽們準備端午辛苦了!為體恤媽媽，饗編幫大家爭取到優惠，讓大家開心過端午還能省荷包! 即日起至5月20日止，凡購買米類、肉類標籤商品，即可享買二送一折扣，此次優惠不限筆數，讓媽媽買得開心，吃的放心!",
    imgUrl:
      "https://github.com/piskesocute/have-farm/blob/main/src/assets/images/dragonboatfestival.jpg?raw=true",
  },
]);
</script>
<template>
  <div class="bread-mt container-lg pt-16">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page">\最新消息</li>
      </ol>
    </nav>
  </div>
  <div class="container-lg">
    <div class="row pt-16">
      <div
        class="col-12 col-lg-3 d-flex flex-lg-column justify-content-lg-start justify-content-around align-items-lg-center"
      >
        <button
          type="buttn"
          class="btn btn-outline-mainorg w-lg-100 mb-16 fs-16 fs-sm-20 lh-base fw-bold list-btn list-btn-active"
        >
          全部消息
        </button>
        <button
          type="buttn"
          class="btn btn-outline-mainorg w-lg-100 mb-16 fs-16 fs-sm-20 lh-base fw-bold list-btn"
        >
          重要公告
        </button>
        <button
          type="buttn"
          class="btn btn-outline-mainorg w-lg-100 mb-16 fs-16 fs-sm-20 lh-base fw-bold list-btn"
        >
          活動訊息
        </button>
        <button
          type="buttn"
          class="btn btn-outline-mainorg w-lg-100 mb-16 fs-16 fs-sm-20 lh-base fw-bold list-btn"
        >
          新品資訊
        </button>
      </div>
      <div class="col-12 col-lg-9">
        <div class="card mb-3" v-for="news in newsData" :key="news.title">
          <div class="row g-0">
            <div class="col-md-4">
              <div class="w-100">
                <img
                  :src="news.imgUrl"
                  class="news-img rounded-start"
                  alt="..."
                />
              </div>
            </div>
            <div class="col-md-8 position-relative">
              <div class="card-body">
                <div
                  class="d-flex justify-content-between mb-8 text-center text-mainred align-items-center"
                >
                  <h5 class="fs-20 lh-base me-3 mb-0 fw-bolder">
                    {{ news.title }}
                  </h5>
                  <h6 class="fw-bold mb-0 fs-14 lh-base">{{ news.date }}</h6>
                </div>
                <p class="card-text news-text">
                  {{ news.describe }}
                </p>
                <router-link to="/" class="text-decoration-none stretched-link">
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bread-mt {
  margin-top: 82px;
  @include lg {
    margin-top: 88px;
  }
}
.news-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: center center;
}
.list-btn {
  color: #460303;
  &:hover {
    color: #fff;
  }
}
.list-btn-active {
  background-color: #ec7e49;
  color: #fff;
}
.news-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @include lg {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
.news-btn {
  color: #ec7e49;
  border: none;
  background-color: white;
  font-weight: 500;
  border: 1px solid #fde47fd2;
  border-radius: 4px;
  transition: 0.2s;
  border-radius: 8px;

  &:hover {
    background-color: #ec7e49;
    border: 1px solid #fde47f;
    transition: 0.2s;
    color: #fde47f;
    transform: translate(0, -3px);
  }
}
</style>
