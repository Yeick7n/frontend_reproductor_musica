import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';

loadFonts()

createApp(App).use(router)
  .use(vuetify)
  .use(VueAxios, axios)
  .mount('#app')