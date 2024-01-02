<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useCheckLogin } from '@/composables/useCheckLogin';
import { useRouter } from 'vue-router';

const router = useRouter();
const user = reactive({
  username: '',
  password: '',
});
// 登入功能
const login = () => {
  axios
    .post(`${import.meta.env.VITE_APP_URL}admin/signin`, user)
    .then((res) => {
      const { token, expired } = res.data;
      document.cookie = `havefarmToken=${token}; expires=${new Date(expired)};`;
      router.push({ path: '/admin' });
      console.log(res.data);
    })
    .catch((err) => {
      console.dir(err.response);
    });
};
// token驗證
const { checkLogin } = useCheckLogin();

onMounted(() => {
  checkLogin();
});
</script>
<template>
  <div
    class="w-100 login-bg"
    @keyup.enter="login"
  >
    <div class="container-lg h-100">
      <div
        class="login-box row w-100 h-100 justify-content-center align-items-center"
      >
        <div
          class="col-5 gap-3 bg-white py-24 px-48 d-flex justify-content-center flex-wrap rounded-12"
        >
          <h1 class="mb-24">後台登入</h1>
          <div class="mb-3 w-100">
            <label
              for="exampleFormControlInput1"
              class="form-label"
              >帳號</label
            >
            <input
              type="email "
              class="form-control"
              id="adminLoginAccount"
              placeholder="name@example.com"
              v-model="user.username"
            />
          </div>
          <div class="mb-5 w-100">
            <label
              for="adminLoginPassword"
              class="form-label"
              >密碼</label
            >
            <input
              type="password"
              class="form-control"
              id="adminLoginPassword"
              v-model="user.password"
            />
          </div>
          <div class="w-100 text-center">
            <button
              type="button"
              class="btn btn-mainred text-white fw-bold"
              @click="login"
            >
              登入
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  outline: 1px solid;
}
.login-bg {
  height: 100vh;
  background-image: url('../assets/images/about-footer-bg.png');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100%;
  background-color: rgba(0, 0, 0, 0.733);
  background-blend-mode: multiply;
}
</style>
