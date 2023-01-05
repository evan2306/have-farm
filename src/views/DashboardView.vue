<script setup>
</script>
<template>
  <div class="mb-64"></div>
  <nav class="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-lg">
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
            <router-link class="text-white text-center" :to="{ name: '商品編輯' }">產品編輯</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- {{ productList }} -->
  <router-view></router-view>
</template>

<style></style>
