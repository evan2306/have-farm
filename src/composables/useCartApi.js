import axios from 'axios';
import { ref } from 'vue';

export function useCartApi() {
  const cartData = ref({});
  const getCartData = async () => {
    axios
      .get(
        `${import.meta.env.VITE_APP_URL}api/${
          import.meta.env.VITE_APP_PATH
        }/cart`,
      )
      .then((res) => {
        console.log(res.data);
        cartData.value = res.data;
        console.log(cartData.value);
      });
  };

  return {
    cartData,
    getCartData,
  };
}
