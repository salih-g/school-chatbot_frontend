import { createApp } from 'vue';

import VueSocketIO from 'vue-socket.io';

import App from './App.vue';

createApp(App)
  .mount('#app')
  .use(
    new VueSocketIO({
      connection: process.env.VUE_APP_SERVICE_URL || 'http://localhost:8081/',
    }),
  );
