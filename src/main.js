import { createApp } from 'vue';
import { createPinia } from 'pinia';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import App from './App.vue';
import router from './router';
import './assets/libs/bootstrap/bootstrap.min.css';
import 'bootstrap';
import '@/assets/style/all.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
