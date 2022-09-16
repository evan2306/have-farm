<script>
export default {};
</script>
<template>
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
          <img class="" src="@/assets/images/ig.png" alt="ig" />
        </a>
        <a href="#" class="me-3 socialmedia">
          <img class="" src="@/assets/images/fb.png" alt="ig" />
        </a>
        <a href="#" class="me-3 socialmedia">
          <img class="" src="@/assets/images/we.png" alt="ig" />
        </a>
        <a href="#" class="me-3 socialmedia">
          <img class="" src="@/assets/images/yt.png" alt="ig" />
        </a>
      </div>
    </section>
  </footer>
</template>
<style lang="scss" scoped>
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
