<script setup></script>
<template>
  <footer class="footer bg-mainred text-white">
    <section class="container-lg">
      <h5 class="fs-5 lh-lg fw-bold">客服資訊</h5>
      <p class="">
        客服電話 :<a class="phone " href="tel"
          >+886-2-1234-5678</a
        >
      </p>
      <p>服務時間 :周一至周五 9:00~18:00</p>
      <p>地址 :台北市中山區中山一路123號</p>
      <div class="socialmedia-box">
        <a href="https://www.instagram.com/" class="me-3 socialmedia">
          <img class="" src="@/assets/images/ig.png" alt="ig" />
        </a>
        <a href="https://zh-tw.facebook.com/" class="me-3 socialmedia">
          <img class="" src="@/assets/images/fb.png" alt="facebook" />
        </a>
        <a href="https://www.wechat.com/zh_HK/" class="me-3 socialmedia">
          <img class="" src="@/assets/images/we.png" alt="wechat" />
        </a>
        <a href="https://www.youtube.com/" class="me-3 socialmedia">
          <img class="" src="@/assets/images/yt.png" alt="youtube" />
        </a>
      </div>
    </section>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  padding-top: 16px;
  padding-bottom: 32px;
}

.phone {
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: #fde47f;
    text-decoration: dashed;
    transition: 0.3s;
  }
}
.socialmedia img{
  border-radius: 50%;
  padding: 1px;
  transition: 0.3s;
  &:hover {
  background-color: #fde47f;
  transition: 0.3s;

}
}
</style>
