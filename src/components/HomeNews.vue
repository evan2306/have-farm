<script></script>
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
        <li class="mb-32" v-for="(item, idx) in 4" :key="idx">
          <div class="news-box mb-4">
            <div
              class="news-top d-flex text-center text-mainred align-items-center"
            >
              <h5 class="fs-20 lh-base me-3 mb-0 fw-bolder">饗農安心購</h5>
              <h6 class="fw-bold mb-0 fs-14 lh-base">2022.01.01</h6>
            </div>
            <div
              class="news-bottom d-flex flex-wrap flex-lg-nowrap justify-content-start"
            >
              <p class="lh-lg text-mainred m-0 news-text fw-semibold">
                本公司產品均經過產銷履歷認證請消費者放心購買，也歡迎至產銷履歷農產品資訊網查詢農產品資訊網查詢農產品資訊網查詢農產品資訊網查詢農產品資訊網查詢農產品資訊網查詢農產品資訊網查詢…
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
