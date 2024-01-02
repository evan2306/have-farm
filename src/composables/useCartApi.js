import axios from 'axios';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useDataStore } from '../stores/saveData';

export function useCartApi() {
  const cartData = ref({});
  const dataStore = useDataStore();
  const { navbarCartItemQty } = storeToRefs(dataStore);

  const getCartData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/${
          import.meta.env.VITE_APP_PATH
        }/cart`,
      );
      cartData.value = res.data.data;
      navbarCartItemQty.value = res.data.data.carts.length;
    } catch (error) {
      console.err(error);
    }
  };

  const updateCartData = async (id, qty) => {
    const data = {
      data: {
        product_id: id,
        qty,
      },
    };
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_APP_URL}api/${
          import.meta.env.VITE_APP_PATH
        }/cart/${id}`,
        data,
      );
      await getCartData();
    } catch (error) {
      console.log(error);
    }
  };
  return {
    cartData,
    getCartData,
    updateCartData,
  };
}
