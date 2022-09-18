<script></script>
<template>
  <div class="banner">
    <div class="h-100 container-lg">
      <div
        class="banner-text h-100 row flex-column justify-content-md-center justify-content-end"
      >
        <h2
          class="text-mainred banner-title fs-40 lh-base fw-bolder offset-lg-1 w-85"
        >
          饗農。<span class="text-mainorg">享</span>農
        </h2>
        <p
          class="fs-3 text-mainred lh-base fw-bold text-decoration-underline offset-lg-1 w-85"
        >
          享用吧！
        </p>
        <p
          class="fs-3 text-mainred lh-base fw-bold text-decoration-underline offset-lg-1 w-85"
        >
          來自農田裡的美好！
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  background-image: url("@/assets/images/bannerbanner.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100%;
  margin-top: 82px;
  height: calc(100vh - 82px);

  @include lg {
    // background-image: url("@/assets/images/bannerbanner.png");
    background-image: url("@/assets/images/banner-mobile.png");
    background-position: top 0% center;
    margin-top: 88px;
    height: calc(100vh - 88px);
  }
}

.banner-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banner-img {
  width: 100%;
}
</style>
