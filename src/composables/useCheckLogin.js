import axios from 'axios';
import { } from 'vue';
import { useRouter } from 'vue-router';
// token驗證
export function useCheckLogin() {
  const router = useRouter();

  const checkLogin = () => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)havefarmToken\s*\=\s*([^;]*).*$)|^.*$/,
      '$1',
    );

    axios.defaults.headers.common.Authorization = token;
    axios.post(`${import.meta.env.VITE_APP_URL}api/user/check`)
      .then(() => {
        router.push({ path: '/admin' });
      }).catch(() => {
        console.log('驗證過期');
        router.push({ path: '/adminlogin' });
      });
  };

  return {
    checkLogin,
  };
}
