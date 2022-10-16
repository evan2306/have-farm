import axios from 'axios';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useModalStore } from '../stores/modal';
import { useDataStore } from '../stores/saveData';

export function usePushProduct() {
  // 取得產品
  const dataStore = useDataStore();
  const { productData } = storeToRefs(dataStore);

  const getProduct = async () => {
    const getProductApi = `${import.meta.env.VITE_APP_URL}api/${
      import.meta.env.VITE_APP_PATH
    }/admin/products/all`;
    const res = await axios.get(getProductApi);
    productData.value = Object.values(res.data.products);
    console.log('更新產品', productData.value);
  };

  // 新增編輯產品
  let pushProductApi;
  const updataTempProduct = ref(null);
  const productModalStore = useModalStore();
  const { closeProductModal } = productModalStore;

  const pushProduct = async (data) => {
    pushProductApi = `${import.meta.env.VITE_APP_URL}api/${
      import.meta.env.VITE_APP_PATH
    }/admin/product`;
    updataTempProduct.value = data;
    try {
      const res = await axios.post(pushProductApi, { data: updataTempProduct.value });
      await getProduct();
      console.log(res.data);
      closeProductModal();
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (data) => {
    pushProductApi = `${import.meta.env.VITE_APP_URL}api/${
      import.meta.env.VITE_APP_PATH
    }/admin/product/${updataTempProduct.value.id}`;
    updataTempProduct.value = data;
    try {
      const res = await axios.put(pushProductApi, { data: updataTempProduct.value });
      await getProduct();
      console.log(res.data);

      closeProductModal();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    pushProduct,
    editProduct,
    updataTempProduct,
    getProduct,
    productData,
  };
}
