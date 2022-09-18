<script></script>
<template>
  <div class="bread-mt container-lg pt-16">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item" aria-current="page">\關於品牌</li>
      </ol>
    </nav>
  </div>
  <div class="bg-maingray">
    <section class="container-lg pt-48 pb-64">
      <h2 class="text-center fs-32 lh-base text-mainred fw-bold">品牌故事</h2>
      <div class="row mt-48 justify-content-center">
        <div class="col-12 col-md-5 mt-16 mt-md-0">
          <div
            class="h-100 d-flex justify-content-center align-items-center rounded-16"
          >
            <img
              class="img-fluid rounded-16"
              src="../assets/images/about-farmer.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="col-12 col-md-9 col-lg-6 offset-lg-1 mt-32 mt-lg-0">
          <p class="text-mainred fs-20 lh-base fw-bold">
            關於農，你知道了多少?<br />是金黃色稻田迎風的稻浪，以及撲鼻而來的稻香?<br />還是超商架上一罐罐白色的罐裝牛奶引起你的記憶?
          </p>
          <p class="text-mainred fs-20 lh-base fw-bold">
            有一群青年，他們脫掉了學士帽，在農田裡穿梭，他們心中懷的不是廠商中的公斤論種，而是吃到你肚子裡的安全，有多少經過他們的手
          </p>
          <p class="text-mainred fs-20 lh-base fw-bold">
            在這裡，你是觀眾
            <br />觀賞著這場來自鄉野間的饗宴...
          </p>
        </div>
      </div>
    </section>
  </div>
  <section class="">
    <div class="container-lg pt-48 pb-64">
      <h2 class="text-center fs-32 lh-base text-mainred fw-bold">
        在這裡你可以...
      </h2>
      <div class="row mt-32">
        <div class="col-12 col-md-6">
          <div class="h-100 d-flex justify-content-center align-items-center">
            <img
              src="../assets/images/廚畜豬肉食品加工廠.png"
              class="rounded-12 map-shadow map-img"
              alt=""
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="d-flex flex-column justify-content-center h-100">
            <h3 class="w-100 text-mainred fw-bold fs-24 lh-base mt-32">
              饗農地圖，找到新鮮!
            </h3>
            <p class="w-100 text-mainred fs-18 lh-lg fw-bold">
              產地在哪裡<br />產品送到你的手上之前有什麼故事<br />輕輕一按，全都在你眼前表演
            </p>
            <div class="ms-auto">
              <router-link
                class="btn fs-16 lh-base fw-bold py-8 px-32 rounded-8 gomap-btn"
                to="farmmap"
                >前往饗農地圖</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="about-footer py-80">
    <div class="container-lg d-flex flex-wrap">
      <h2 class="w-100 fs-48 text-white fw-bold text-decoration-underline">
        深入產地，現採新鮮
      </h2>
      <h4 class="mt-48 fs-32 text-white fw-bold lh-lg">
        與小農直接合作，配合專業冷藏冷凍物流<br />把你平常拿不到的新鮮，直接寄給你
      </h4>
      <div class="w-100 d-flex justify-content-center mt-64">
        <router-link to="/famrshop" class="goshop-btn btn py-8 px-48 fw-bold"
          >前往商城</router-link
        >
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.bread-mt {
  margin-top: 82px;
  @include lg {
    margin-top: 88px;
  }
}
.map-img {
  max-width: 100%;
  object-fit: cover;
  object-position: 0px 100%;
  @include md {
    width: 100%;
    height: 400px;
  }
}
.map-shadow {
  box-shadow: 4px 4px 12px rgb(172, 172, 172);
  transition: 0.4s;
}
.gomap-btn {
  background-color: #fde47f;
  color: #460303;
  transition: 0.2s;
  border: 1px solid #fde47f00;

  &:hover {
    background-color: #460303;
    color: white;
    transition: 0.2s;
    border: 1px solid #fde47f;
  }
}
.goshop-btn {
  background-color: #460303;
  color: white;
  transition: 0.2s;
  border: 1px solid #460303;

  &:hover {
    background-color: #fde47f;
    color: #460303;
    transition: 0.2s;
  }
}
.about-footer {
  background-image: url("../assets/images/about-footer-bg.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100%;
  background-color: rgba(0, 0, 0, 0.247);
  background-blend-mode: multiply;
}
</style>
