import axios from 'axios';
import { storeToRefs } from 'pinia';
import Swal from 'sweetalert2';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { useDataStore } from '../stores/saveData';

export function useClientProduct() {
  const route = useRoute();
  const pathId = route.params.id;

  const dataStore = useDataStore();
  const { productData } = storeToRefs(dataStore);

  const getClientProduct = () => {
    const test = ref([]);
    axios
      .get(
        `${import.meta.env.VITE_APP_URL}api/${
          import.meta.env.VITE_APP_PATH
        }/product/${pathId}`,
      )
      .then((res) => {
        console.log(route.params.id);
        console.log(res.data);
        productData.value = res.data.product;
        test.value = res.data.product;
        // console.log('product.value', productData.value);
        return test;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    getClientProduct,
    pathId,
  };
}
