import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'

// 可选：设置基础路径
axios.defaults.baseURL = '/api'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
