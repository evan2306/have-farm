<script setup></script>
<template>
  <div class="containe-lg">
    <nav
      class="
        navbar navbar-expand-lg navbar-light
        bg-light
        border-5 border-bottom border-mainred
        py-4
        fixed-top
      "
    >
      <div class="container-lg">
        <h1 class="mb-0">
          <router-link class="logo" to="/">饗農</router-link>
        </h1>
        <button
          class="navbar-toggler navhamburgerbtn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div class="button-list"></div>
          <div class="button-list"></div>
          <div class="button-list"></div>
          <div class="button-list"></div>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto gap-24">
            <li class="nav-item">
              <router-link to="about" class="nav-link navbtn text-center">
                關於饗農</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="news" class="nav-link navbtn text-center">
                最新消息</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="farmmap" class="nav-link navbtn text-center"
                >饗農地圖</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="farmshop" class="nav-link navbtn text-center"
                >響農商城</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/farmcart"
                class="
                  nav-link
                  navbtn
                  d-flex
                  justify-content-center
                  align-items-center
                  d-lg-block
                  gap-2 gap-lg-0
                "
              >
                <i class="material-icons align-middle fs-5"> shopping_cart </i>

                <p class="d-block d-lg-none mb-0">購物車</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
// logo h1樣式
.logo {
  background-image: url('@/assets/images/logo-light.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
  width: 90px;
  height: 45px;
  display: block;
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
  transition: 0.2s;

  &:hover {
    background-image: url('@/assets/images/logo-dark.png');
    transition: 0.2s;
  }
}

//橫幅上的按鍵
.navbtn {
  color: #460303;
  font-weight: 600;
  transition: 0.2s;
  position: relative;

  @include lg {
    font-size: 24px;
    border-bottom: 1px solid #4603039a;
  }

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 0%;
    padding-bottom: 2px;
    background-color: #460303;
    transition: 0.3s;
  }
  &.router-link-active {
    color: #fde47f;
    transform: translate(0, -3px);

    &::before {
      width: 100%;
      transition: 0.3s;
    }

    @include lg {
      transform: none;
    }
  }

  &:hover {
    transition: 0.2s;
    color: #fde47f;
    transform: translate(0, -3px);

    &::before {
      width: 100%;
      transition: 0.3s;
    }

    @include lg {
      transform: none;
    }
  }
}

// 三明治的三條槓
.button-list {
  width: 25px;
  margin: 5px 0;
  padding-top: 1px;
  background-color: #460303;
}

// 三明治按鈕
.navhamburgerbtn {
  border: 4px solid #fde47f00;
  color: #fff;
  transition: 0.2s;

  &:hover {
    border: 4px solid #fde47f;
    transition: 0.2s;
  }
}
</style>
