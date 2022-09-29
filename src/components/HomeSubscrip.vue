<script setup></script>
<template>
  <section class="container-lg py-48 py-md-64">
    <h2 class="text-center fs-24 lh-base text-mainred fw-bold mb-8 mb-md-16">
      訂閱我們，獲得最新的活動資訊!
    </h2>
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-sm-6">
        <div class="input-group mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="輸入電子郵件"
            aria-label="email"
            aria-describedby="subscriptBtn"
          />
          <button
            class="btn subscript-btn fw-bold fs-16 lh-base"
            type="button"
            id="subscriptBtn"
          >
            訂閱
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.subscript-btn {
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
