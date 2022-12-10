import axios from 'axios';
import { storeToRefs } from 'pinia';
import Swal from 'sweetalert2';
import { useRoute } from 'vue-router';
import { useDataStore } from '../stores/saveData';

export function useClientProduct() {
  const route = useRoute();
  const pathId = route.params.id;

  const dataStore = useDataStore();
  const { productData } = storeToRefs(dataStore);

  // 取得客戶端資料
  const getClientProduct = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/${
          import.meta.env.VITE_APP_PATH
        }/product/${pathId}`,
      );
      productData.value = res.data.product;
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  // 跳出提示提醒操作成功或失敗
  const pushCartAlert = async (
    action,
    state,
    title = '產品',
    request = [''],
  ) => {
    if (state) {
      try {
        const res = await Swal.fire({
          title: `<strong>${action}成功</strong>`,
          icon: 'success',
          html: `<span class="text-danger">${title}</span>已成功${action}`,
        });
        return res;
      } catch (error) {
        console.log(error);
        return error;
      }
    }

    let errorText = request;
    if (Array.isArray(request)) {
      errorText = request.join().replaceAll(',', '、');
    }
    try {
      const res = await Swal.fire({
        title: `<strong>${action}失敗</strong>`,
        icon: 'error',
        html: `<span class="text-danger">${title}</span>${action}失敗，請重新嘗試</br>`,
        footer: `<p class='text-danger'>${errorText}</p>`,
      });
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  // 添加至購物車
  const addCart = async (productID, title, qty = 1) => {
    const action = '新增';
    const data = {
      product_id: productID,
      qty,
    };
    try {
      const res = await axios.post(`${import.meta.env.VITE_APP_URL}api/${
        import.meta.env.VITE_APP_PATH
      }/cart`, { data });
      // eslint-disable-next-line no-unused-vars
      const pushCartAlertRes = await pushCartAlert(action, true, title);
      return res;
    } catch (error) {
      const errorMessage = JSON.parse(error.response.request.response).message;
      // eslint-disable-next-line no-unused-vars
      const pushCartAlertRes = await pushCartAlert(action, false, title, errorMessage);
      return error;
    }
  };

  return {
    getClientProduct,
    pathId,
    addCart,
  };
}
