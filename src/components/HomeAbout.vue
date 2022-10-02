<script setup></script>
<template>
  <footer class="bg-maingray">
    <section class="container-lg py-64">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-5 offset-lg-2">
          <img
            class="img-fluid"
            src="@/assets/images/farm.png"
            alt="farm.png"
          />
        </div>
        <div
          class="
            col-12 col-sm-6 col-lg-3
            d-flex
            justify-content-start
            align-items-center
            mt-8 mt-md-0
          "
        >
          <p class="fs-32 fs-md-24 lh-base fw-bold text-mainred">
            洄游青農不孤單!!<br />與在地小農深入合作
          </p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-end mt-24">
        <div class="col-12 col-sm-6 col-lg-5">
          <img class="img-fluid" src="@/assets/images/cow.png" alt="farm.png" />
        </div>
        <div
          class="
            col-12 col-sm-6 col-lg-3
            mt-8 mt-md-0
            offset-lg-2
            d-flex
            justify-content-start justify-content-sm-end
            align-items-center
          "
        >
          <p class="fs-32 fs-md-24 lh-base fw-bold text-mainred">
            為你的食安把關<br />請饗用來自青農的美味
          </p>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-40">
        <router-link
          class="btn fs-16 lh-base fw-bold py-16 px-48 rounded-16 goshop-btn"
          to="farmshop"
        >
          前往選購新鮮
        </router-link>
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.bottom-about {
  margin-bottom: 64px;
}

.about-bottom-top-img {
  display: block;
  max-width: 451px;
  height: auto;
}
.goshop-btn {
  background-color: #fde47f;
  color: #460303;
  transition: 0.2s;

  &:hover {
    background-color: #460303;
    color: #fde47f;
    transition: 0.2s;
  }
}
</style>
