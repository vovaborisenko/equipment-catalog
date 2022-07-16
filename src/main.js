import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router';
import icons from '@/plugins/icons';

import '@/assets/styles/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(icons);

app.mount('#app');

