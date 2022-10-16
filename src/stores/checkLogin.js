import axios from 'axios';
import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

// eslint-disable-next-line import/prefer-default-export
export const useCheckLoginPinia = defineStore('checkLogin', () => {
  const user = reactive({
    username: '',
    password: '',
  });
  const router = useRouter();
  const checkLogin = () => {
    const token = document.cookie.replace(
      // eslint-disable-next-line no-useless-escape
      /(?:(?:^|.*;\s*)havefarmToken\s*\=\s*([^;]*).*$)|^.*$/,
      '$1',
    );

    axios.defaults.headers.common.Authorization = token;
    axios.post(`${import.meta.env.VITE_APP_URL}api/user/check`).then(() => {
      alert('已成功驗證，進行跳轉');
      router.push({ path: '/admin' });
    });
  };
  return {
    checkLogin,
    user,
  };
});
