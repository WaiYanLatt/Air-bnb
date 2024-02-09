import './assets/main.css'
import './assets/fontawesome-free-6.1.1-web/css/all.min.css'

import router from './router.js'
import pinia from './pinia/store.js'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(pinia).use(router).mount('#app')
