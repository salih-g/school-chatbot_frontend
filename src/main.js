import { createApp } from 'vue';

import VueSocketIO from 'vue-3-socket.io';

import App from './App.vue';

const socketio = new VueSocketIO({
  connection: process.env.VUE_APP_SERVICE_URL || 'http://localhost:8081/',
});

const app = createApp(App).use(socketio);

app.mount('#app');
