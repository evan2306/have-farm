import { createApp } from 'vue';
import { createPinia } from 'pinia';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import App from './App.vue';
import router from './router';
import '@/assets/style/all.scss';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
// eslint-disable-next-line import/order, no-unused-vars
import Swal from 'sweetalert2';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
