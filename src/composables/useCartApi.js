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
      const res = await axios
        .get(
          `${import.meta.env.VITE_APP_URL}api/${
            import.meta.env.VITE_APP_PATH
          }/cart`,
        );
      cartData.value = res.data.data;
      navbarCartItemQty.value = res.data.data.carts.length;
    } catch (error) {
      console.log(error);
    }
    // axios
    //   .get(
    //     `${import.meta.env.VITE_APP_URL}api/${
    //       import.meta.env.VITE_APP_PATH
    //     }/cart`,
    //   )
    //   .then((res) => {
    //     cartData.value = res.data.data;
    //     navbarCartItemQty.value = res.data.data.carts.length;
    //     console.log('getCartData');
    //   });
  };

  return {
    cartData,
    getCartData,
  };
}
