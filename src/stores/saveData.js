import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDataStore = defineStore('dataSave', () => {
  const productData = ref(null);
  return {
    productData,
  };
});
