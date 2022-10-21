<script setup>
import { storeToRefs } from 'pinia';
import { useDataStore } from '../stores/saveData';
import { usePushProduct } from '../composables/usePushProduct';

const dataStore = useDataStore();
const { pagination } = storeToRefs(dataStore);
// const props = defineProps({
//   pages: {
//     type: Object,
//     default: () => ({
//       category: '',
//       current_page: 1,
//       hes_next: false,
//       has_pre: false,
//       total_pages: 1,
//     }),
//   },
// });
const { getProduct } = usePushProduct();

</script>
<template>
{{pagination}}
<nav aria-label="Page navigation   ">
  <ul class="pagination d-flex justify-content-center">
    <li class="page-item" :class="{disabled:!pagination.has_pre}">
      <a class="page-link" href="#"
      @click.prevent="getProduct(pagination.current_page-1)" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"
    v-for="idx in pagination.total_pages" :key="idx+13215"
>
    <a class="page-link" href="#"
    @click.prevent="getProduct(idx)"
    >{{idx}}</a>
  </li>
    <li class="page-item" :class="{disabled:!pagination.has_next}">
      <a class="page-link" href="#" aria-label="Next"
      @click.prevent="getProduct(pagination.current_page+1)"
      >
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>
<style lang='scss' scoped></style>
