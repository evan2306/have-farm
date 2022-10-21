import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDataStore = defineStore('dataSave', () => {
  const productData = ref(null);
  const pagination = ref({
    total_pages: 1,
    current_page: 1,
    has_pre: 1,
    has_next: 1,
    category: '',
  });
  return {
    productData,
    pagination,
  };
});
