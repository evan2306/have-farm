<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav class="bg-mainred">
    <div class="top-nav d-flex justify-content-between container-lg">
      <h1 class="mb-0 text-mainred fw-bold">
        <a href="#" class="logo text-decoration-none d-block lh-base"> 饗農 </a>
      </h1>
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
            ><i class="material-icons d-block fs-5"> shopping_cart </i></a
          >
        </li>
      </ul>
    </div>
    <!-- <div class="bottom-nav bg-mainred">
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
    </div> -->
  </nav>

  <div class="banner">
    <div class="banner-text container-lg">
      <h1 class="text-mainred">饗農。<span class="text-mainorg">享</span>農</h1>
      <p class="fs-3 text-mainred lh-base fw-bold text-decoration-underline">
        享用吧！
      </p>
      <p class="fs-3 text-mainred lh-base fw-bold text-decoration-underline">
        來自農田裡的美好！
      </p>
    </div>
  </div>
  <header class="container-lg">
    <section class="news-section row justify-content-center align-items-center">
      <h2 class="col-12 text-center fs-2 lh-base fw-bolder text-mainred">
        最新消息
      </h2>
      <ul class="news list-unstyled col-8">
        <li class="news-box mb-4">
          <div class="news-top d-flex text-center text-mainred">
            <h5 class="fs-5 lh-base me-3 mb-0 fw-bolder">饗農安心購</h5>
            <h6 class="fw-bold mb-0 fs-6 lh-base">2022.01.01</h6>
          </div>
          <div class="news-bottom d-flex">
            <p class="lh-lg text-mainred m-0">
              本公司產品均經過產銷履歷認證請消費者放心購買，也歡迎至產銷履歷農產品資訊網查詢…
            </p>
            <button type="button" class="news-btn ms-auto fw-bolder">
              more
            </button>
          </div>
        </li>
        <li class="news-box mb-4">
          <div class="news-top d-flex text-center text-mainred">
            <h5 class="fs-5 lh-base me-3 mb-0 fw-bolder">夏日FUN饗宴</h5>
            <h6 class="fw-bold mb-0 fs-6 lh-base">2022.07.01</h6>
          </div>
          <div class="news-bottom d-flex">
            <p class="lh-lg text-mainred m-0">
              即日起購買乳品、蛋品滿3000即送彗星牧場入場券，數量有限動作要快(不限次數)…
            </p>
            <button type="button" class="news-btn ms-auto fw-bolder">
              more
            </button>
          </div>
        </li>
        <li class="news-box mb-4">
          <div class="news-top d-flex text-center text-mainred">
            <h5 class="fs-5 lh-base me-3 mb-0 fw-bolder">
              618年中慶，饗農大放送
            </h5>
            <h6 class="fw-bold mb-0 fs-6 lh-base">2022.06.15</h6>
          </div>
          <div class="news-bottom d-flex">
            <p class="lh-lg text-mainred m-0">
              歡慶618年中慶，即日起凡購買滿1000，即送100元折價券(折扣次數限一次…
            </p>
            <button type="button" class="news-btn ms-auto fw-bolder">
              more
            </button>
          </div>
        </li>
        <li class="news-box mb-4">
          <div class="news-top d-flex text-center text-mainred">
            <h5 class="fs-5 lh-base me-3 mb-0 fw-bolder">饗端午</h5>
            <h6 class="fw-bold mb-0 fs-6 lh-base">2022.05.15</h6>
          </div>
          <div class="news-bottom d-flex">
            <p class="lh-lg text-mainred m-0">
              即日起至端午，凡購買稻米產品+肉品，即享買一送一折扣(折扣次數限一次)…
            </p>
            <button type="button" class="news-btn ms-auto fw-bolder">
              more
            </button>
          </div>
        </li>
      </ul>
    </section>
  </header>
  <main class="cart-select">
    <section class="container-lg">
      <div class="row pt-5 justify-content-center">
        <h2
          class="col-12 text-center fs-2 lh-base fw-bolder text-mainred pb-4 m-0"
        >
          精選熱銷
        </h2>
        <div class="cart-select-group row justify-content-around">
          <div class="card cart-card col-3 pt-2 px-3 pb-2">
            <img
              src="./assets/images/milk.png"
              class="cart-card-img"
              alt="商品圖片"
            />
            <div class="card-body mt-2 p-0">
              <p class="card-text m-0 text-mainred fw-bold">彗星牧場</p>
              <p class="card-text text-mainred fw-bold fs-5 lh-lg mb-2">
                初番鮮乳(1830ml)
              </p>
              <p class="card-text text-mainred fw-bold fs-5 lh-lg mb-2">
                NT$160
              </p>
              <button
                type="button"
                class="w-100 border-0 bg-mainyellow py-3 rounded fw-bold"
              >
                立即購買
              </button>
            </div>
          </div>
          <div class="card cart-card col-3 pt-2 px-3 pb-2">
            <img
              src="./assets/images/milk.png"
              class="cart-card-img"
              alt="商品圖片"
            />
            <div class="card-body mt-2 p-0">
              <p class="card-text m-0 text-mainred fw-bold">彗星牧場</p>
              <p class="card-text text-mainred fw-bold fs-5 lh-lg mb-2">
                初番鮮乳(1830ml)
              </p>
              <p class="card-text text-mainred fw-bold fs-5 lh-lg mb-2">
                NT$160
              </p>
              <button
                type="button"
                class="w-100 border-0 bg-mainyellow py-3 rounded fw-bold"
              >
                立即購買
              </button>
            </div>
          </div>
          <div class="card cart-card col-3 pt-2 px-3 pb-2">
            <img
              src="./assets/images/milk.png"
              class="cart-card-img"
              alt="商品圖片"
            />
            <div class="card-body mt-2 p-0">
              <p class="card-text m-0 text-mainred fw-bold">彗星牧場</p>
              <p class="card-text text-mainred fw-bold fs-5 lh-lg mb-2">
                初番鮮乳(1830ml)
              </p>
              <p class="card-text text-mainred fw-bold fs-5 lh-lg mb-2">
                NT$160
              </p>
              <button
                type="button"
                class="w-100 border-0 bg-mainyellow py-3 rounded fw-bold"
              >
                立即購買
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="cart-select-group-btn col-3 bg-mainred border-0 text-white p-3 rounded"
        >
          查看更多商品
        </button>
      </div>
    </section>
  </main>
  <section class="pt-5 container-lg bottom-about">
    <div class="row justify-content-center">
      <h2 class="text-mainred fw-bold lh-lg text-center col-12">關於饗農</h2>
      <div class="mt-4 row justify-content-center align-items-center">
        <img
          class="col-4 offset-1 about-bottom-top-img"
          src="./assets/images/farm.png"
          alt="farm.png"
        />
        <div class="col-4 d-flex flex-column">
          <h3 class="fs-4 fw-bolder lh-lg text-mainred">洄游青農不孤單!!</h3>
          <h3 class="fs-4 fw-bolder lh-lg text-mainred">與在地小農深入合作</h3>
        </div>
      </div>
      <div
        class="mt-4 row justify-content-center align-items-center flex-row-reverse"
      >
        <img
          class="col-4 about-bottom-top-img"
          src="./assets/images/farm.png"
          alt="farm.png"
        />
        <div class="offset col-3 d-flex flex-column">
          <h3 class="fs-4 fw-bolder lh-lg text-mainred text-end">
            為你的食安把關
          </h3>
          <h3 class="fs-4 fw-bolder lh-lg text-mainred text-end">
            請饗用來自青農的美味
          </h3>
        </div>
      </div>
      <button
        type="button"
        class="bottom-about-btn fw-bold mt-5 p-3 col-3 rounded bg-mainyellow text-mainred border-0"
      >
        查看更多
      </button>
    </div>
  </section>
  <footer class="footer bg-mainred text-white">
    <section class="container-lg">
      <h5 class="fs-5 lh-lg fw-bold">客服資訊</h5>
      <p class="">
        客服電話 :<a class="phone text-decoration-none text-white" href="tel"
          >+886-2-1234-5678</a
        >
      </p>
      <p>服務時間 :周一至周五 9:00~18:00</p>
      <p>地址 :台北市中山區中山一路123號</p>
      <div class="socialmedia-box">
        <a href="#" class="me-3 socialmedia">
          <img class="" src="./assets/images/ig.png" alt="ig" />
        </a>
        <a href="#" class="me-3 socialmedia">
          <img class="" src="./assets/images/fb.png" alt="ig" />
        </a>
        <a href="#" class="me-3 socialmedia">
          <img class="" src="./assets/images/we.png" alt="ig" />
        </a>
        <a href="#" class="me-3 socialmedia">
          <img class="" src="./assets/images/yt.png" alt="ig" />
        </a>
      </div>
    </section>
  </footer>
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
  color: #fff;
  &:hover {
    transition: 0.2s;
    color: #fde47f;
  }
}

.logo {
  background-image: url("./assets/images/logo.png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
  width: 80px;
  height: 80px;
  display: block;
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
}

// 橫幅
.banner {
  background-image: url("./assets/images/bannerbanner (2).png");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100%;
  height: calc(100vh - 80px);
}

.banner-text {
  padding-top: 250px;

  h1 {
    font-weight: 900;
    font-size: 60px;
    line-height: 92px;
  }
}

.banner-img {
  width: 100%;
}

.search-box {
  max-width: 356px;
}

.news-section {
  padding-top: 48px;
  padding-bottom: 64px;

  h2 {
    margin-bottom: 32px;
  }
}

.news-box {
  padding-left: 16px;
  border-left: 4px solid #460303;
}

.news-bottom {
  border-bottom: 1px solid #460303;
}

.news-btn {
  color: #ec7e49;
  border: none;
  background-color: white;
  font-weight: 500;

  &:hover {
    outline: 1px solid #fde47f;
    transition: 0.3s;
  }
}

.cart-select {
  background-color: #fbf9f3;
  padding-bottom: 64px;
}

.cart-card-img {
  max-width: 312px;
  height: auto;
  margin: 0;
}

.cart-select-group {
  padding-bottom: 40px;
}

.bottom-about {
  margin-bottom: 64px;
}

.about-bottom-top-img {
  display: block;
  max-width: 451px;
  height: auto;
}

.footer {
  padding-top: 64px;
  padding-bottom: 64px;
}

.phone:hover {
  outline: 2px solid #fde47f;
}

.socialmedia img:hover {
  outline: 2px solid #fde47f;
}
</style>
