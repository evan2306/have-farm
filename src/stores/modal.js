import { Modal } from 'bootstrap';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modalcontrol', () => {
  let productModal = null;
  const isProductModal = ref(null);
  const creatProductModal = () => {
    productModal = new Modal(isProductModal.value.isModal, {
      backdrop: 'static',
    });
  };
  const addProduct = () => {
    console.log('modal.js.addProduct');
    productModal.show();
  };
  const closeModal = () => {
    console.log('closeModal');
    productModal.hide();
  };
  return {
    productModal,
    isProductModal,
    creatProductModal,
    addProduct,
    closeModal,
  };
});
