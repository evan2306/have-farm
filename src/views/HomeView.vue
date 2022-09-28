<script setup>
import HomeBanner from "@/components/HomeBanner.vue";
import HomeNews from "@/components/HomeNews.vue";
import HomeHotItem from "../components/HomeHotItem.vue";
import HomeAbout from "../components/HomeAbout.vue";
</script>
<template>
  <LayoutNavbar />
  <HomeBanner />
  <HomeNews />
  <HomeHotItem />
  <HomeSeasonItem />
  <HomeAbout />
  <HomeSubscrip />
  <LayoutFooter />
</template>

<style lang="scss" scoped></style>
