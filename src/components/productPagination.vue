<script setup>
import { usePushProduct } from '../composables/usePushProduct';

const props = defineProps({
  pages: {
    type: Object,
    default: () => ({
      category: '',
      current_page: 1,
      hes_next: false,
      has_pre: false,
      total_pages: 1,
    }),
  },
});
console.log('props.pages', props.pages);
const { getProduct } = usePushProduct();

</script>
<template>
<nav aria-label="Page navigation   ">
  <ul class="pagination d-flex justify-content-center">
    <li class="page-item" :class="{disabled:!pages.has_pre}">
      <a class="page-link" href="#"
      @click.prevent="getProduct(pages.current_page-1)" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"
    v-for="idx in pages.total_pages" :key="idx+13215"
>
    <a class="page-link" href="#"
    @click.prevent="getProduct(idx)"
    >{{idx}}</a>
  </li>
    <li class="page-item" :class="{disabled:!pages.has_next}">
      <a class="page-link" href="#" aria-label="Next"
      @click.prevent="getProduct(pages.current_page+1)"
      >
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>
<style lang='scss' scoped></style>
