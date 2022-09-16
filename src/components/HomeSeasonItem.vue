<script></script>
<template>
  <main class="pt-48 pb-64">
    <section class="container-lg">
      <h2
        class="w-100 text-center fs-32 lh-base fw-bolder text-mainred mb-24 mb-lg-32"
      >
        季節限定
      </h2>
      <div class="row row-cols-1 row-cols-md-4 gx-md-24 gx-0 gy-24 gy-lg-0">
        <div class="col" v-for="(item, idx) in 4" :key="idx">
          <div class="card border-0 rounded-4 season-item-card rounded-top-16">
            <div class="card-top w-100 p-16">
              <img
                src="@/assets/images/milk.png"
                class="cart-card-img mx-auto d-block img-fluid"
                alt="商品圖片"
              />
            </div>

            <div class="card-body mt-8 px-22 py-0 text-mainred">
              <h5 class="mb-0 fs-20 lh-base fw-bold">彗星牧場</h5>
              <p class="fs-16 lh-base mb-8 fw-bold">初番鮮乳(1830ml)</p>
              <p class="fs-20 lh-base mb-8 fw-bold text-end">NT$160</p>
            </div>
            <div class="card-footer border-0 p-0 rounded-bottom-16">
              <button
                type="button"
                class="w-100 border-0 py-16 fs-16 lh-base rounded-bottom-16 fw-bold goshop-btn"
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
