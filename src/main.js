import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router';
import icons from '@/plugins/icons';
import notifications from '@/plugins/notifications';

import '@/utils';
import '@/assets/styles/main.scss';

const store = createPinia();
const app = createApp(App);

app.use(store);
app.use(router);
app.use(icons);
app.use(notifications);

app.mount('#app');

