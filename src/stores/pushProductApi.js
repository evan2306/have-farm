import axios from 'axios';
import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { useModalStore } from '@/stores/modal';

export const useProductApiStore = defineStore('pushProductApi', () => {
  const pushProductApi = `${import.meta.env.VITE_APP_URL}api/${
    import.meta.env.VITE_APP_PATH
  }/admin/product`;

  const modalStore = useModalStore();
  const { closeModal } = modalStore;

  const tempProduct = reactive({
    imagesUrl: [''],
  });

  const pushProduct = async () => {
    try {
      const res = await axios.post(pushProductApi, { data: tempProduct });
      console.log(res);
      closeModal();
    } catch (error) {
      console.dir(error);
    }
  };

  return {
    pushProduct,
    tempProduct,
  };
});
