import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDataStore = defineStore('dataSave', () => {
  const productData = ref([{
    imgUrl: '',
    imagesUrl: [''],
    title: '',
    category: '',
    unit: '',
    origin_price: 0,
    price: 0,
    aria: '',
    farm: '',
    description: '',
    content: '',
    is_enabled: 1,
    is_special: 0,
    qty: 0,
  }]);

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
