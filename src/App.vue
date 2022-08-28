<script setup></script>

<template>
  <nav>
    <div class="top-nav d-flex justify-content-between container-lg">
      <h2 class="mb-0 text-mainred fw-bold d-flex align-items-center">
        <a href="#" class="text-decoration-none text-mainred d-block lh-base"
          >饗農</a
        >
      </h2>
      <ul class="list-unstyled d-flex mb-0 align-items-center">
        <li class="">
          <a href="#" class="navbtn d-block p-3 text-decoration-none fw-bold"
            >關於饗農</a
          >
        </li>
        <li class="">
          <a href="#" class="navbtn d-block p-3 text-decoration-none fw-bold"
            >饗農地圖</a
          >
        </li>
        <li class="">
          <a href="#" class="navbtn d-block p-3 text-decoration-none fw-bold"
            >響農商城</a
          >
        </li>
        <li class="">
          <a
            href="#"
            class="navbtn d-block py-3 px-2 text-decoration-none fw-bold"
            ><i class="material-icons d-block fs-5"> person </i></a
          >
        </li>
        <li class="">
          <a
            href="#"
            class="navbtn d-block py-3 px-2 text-decoration-none fw-bold"
            ><i class="material-icons d-block fs-5"> shopping_cart </i></a
          >
        </li>
      </ul>
    </div>
    <div class="bottom-nav bg-mainred">
      <div class="d-flex justify-content-end container-lg py-2">
        <div class="input-group search-box">
          <label class="input-group-text bg-white" for="itemSearch">
            <span class="material-icons"> search </span>
          </label>
          <input
            type="text"
            class="form-control"
            id="itemSearch"
            aria-label="search"
            name="search"
            placeholder="搜尋商品"
          />
          <button
            class="btn btn-outline-secondary fw-bolder p-1 bg-mainyellow text-mainred"
            type="button"
            id="itemSearch"
          >
            搜尋商品
          </button>
        </div>
      </div>
    </div>
  </nav>
  <div class="banner">
    <!-- <img class="banner-img" src="./assets/images/bannerbanner.png" alt="封面" /> -->
  </div>
</template>

<style lang="scss">
* {
  outline: 1px solid #000;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Microsoft JhengHei", Roboto, "Helvetica Neue", Arial, sans-serif;
}

.navbtn {
  color: #460303;
  &:hover {
    transition: 0.2s;
    color: #fde47f;
  }
}
.banner {
  background-image: url("./assets/images/bannerbanner (2).png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100%;
  height: calc(100vh - 110px);
}

.banner-img {
  width: 100%;
}

.search-box {
  max-width: 356px;
}
</style>
