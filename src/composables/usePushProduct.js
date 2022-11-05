import axios from 'axios';
import { storeToRefs } from 'pinia';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import { useModalStore } from '../stores/modal';
import { useDataStore } from '../stores/saveData';

export function usePushProduct() {
  const dataStore = useDataStore();
  const pagination = ref({
    total_pages: 1,
    current_page: 1,
    has_pre: 1,
    has_next: 1,
    category: '',
  });
  const { productData } = storeToRefs(dataStore);

  const getProduct = async (page = 1) => {
    const getProductApi = `${import.meta.env.VITE_APP_URL}api/${
      import.meta.env.VITE_APP_PATH
    }/admin/products?page=${page}`;
    try {
      const res = await axios.get(getProductApi);
      productData.value = Object.values(res.data.products);
      pagination.value = res.data.pagination;
    } catch (error) {
      console.log(error);
    }
  };

  // api回傳視窗
  const actionAlert = (action, state, title = '產品', request = '') => {
    if (state) {
      Swal.fire({
        title: `<strong>${action}成功</strong>`,
        icon: 'success',
        html: `<span class="text-danger">${title}</span>已成功${action}`,
      }).then(() => {
        getProduct();
      });
    } else {
      let errorText;
      if (Array.isArray(request)) {
        errorText = request.join().replaceAll(',', '、');
      } else {
        errorText = request;
      }
      Swal.fire({
        title: `<strong>${action}失敗</strong>`,
        icon: 'error',
        html: `<span class="text-danger">${title}</span>${action}失敗，請重新嘗試</br>`,
        footer: `<p class='text-danger'>${errorText}</p>`,
      }).then(() => {
        getProduct();
      });
    }
  };

  // 新增編輯產品
  const updataTempProduct = ref(null);
  const productModalStore = useModalStore();
  const { closeProductModal } = productModalStore;

  const pushEditProduct = async (data, state) => {
    let action;
    let pushProductApi;
    let apiAciton;
    updataTempProduct.value = data;
    if (state) {
      action = '新增';
      apiAciton = 'post';
      pushProductApi = `${import.meta.env.VITE_APP_URL}api/${
        import.meta.env.VITE_APP_PATH
      }/admin/product`;
    } else {
      action = '編輯';
      apiAciton = 'put';
      pushProductApi = `${import.meta.env.VITE_APP_URL}api/${
        import.meta.env.VITE_APP_PATH
      }/admin/product/${updataTempProduct.value.id}`;
    }

    try {
      console.log(state);
      const res = await axios[apiAciton](pushProductApi, { data: updataTempProduct.value });
      await getProduct();
      console.log(res.data);
      closeProductModal();
      actionAlert(action, true, updataTempProduct.value.title);
    } catch (error) {
      const res = JSON.parse(error.response.request.response).message;
      console.log(error);
      actionAlert(action, false, updataTempProduct.value.title, res);
    }
  };

  // 刪除產品
  const deleteProduct = async (product) => {
    const action = '刪除';
    const deleteProductApi = `${import.meta.env.VITE_APP_URL}api/${
      import.meta.env.VITE_APP_PATH
    }/admin/product/${product.id}`;
    try {
      const res = await axios.delete(deleteProductApi);
      actionAlert(action, true, product.title);
      console.log(res);
    } catch (error) {
      const res = JSON.parse(error.response.request.response).message;
      actionAlert(action, false, product.title, res);
      console.log(error);
    }
  };

  const deleteAction = (item) => {
    const deleteProductAlert = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger m-3 p-3',
        cancelButton: 'btn btn-outline-primary m-3 p-3',
      },
      buttonsStyling: false,
    });

    deleteProductAlert.fire({
      title: '<strong>刪除商品</strong>',
      icon: 'question',
      html: `確定要刪除<span class="text-danger">${item.title}</span>這項商品嗎?`,
      confirmButtonText: '確定刪除',
      cancelButtonText: '取消',
      showCloseButton: true,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(item);
      }
    });
  };

  return {
    pushEditProduct,
    pagination,
    updataTempProduct,
    getProduct,
    productData,
    deleteAction,
    actionAlert,
  };
}
