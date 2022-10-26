<script setup>

const props = defineProps({
  pages: {
    type: Object,
    default() {
      return {};
    },
  },
});
const emit = defineEmits(['get-product']);

const changePage = (page) => {
  emit('get-product', page);
};

</script>
<template>
<nav aria-label="Page navigation   ">
  <ul class="pagination d-flex justify-content-center">
    <li class="page-item" :class="{disabled:!pages.has_pre}">
      <a class="page-link" href="#"
      @click.prevent="changePage(pages.current_page-1)" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item "
    v-for="idx in pages.total_pages"
    :key="idx+13215"
    :class="{active:idx===pages.current_page}"
>
    <a class="page-link" href="#"
    @click.prevent="changePage(idx)"
    >{{idx}}</a>
  </li>
    <li class="page-item" :class="{disabled:!pages.has_next}">
      <a class="page-link" href="#" aria-label="Next"
      @click.prevent="changePage(pages.current_page+1)"
      >
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>
<style lang='scss' scoped></style>
