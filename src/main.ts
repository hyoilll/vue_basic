import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// use: グローバルで使うものを登録
app.use(createPinia())
// router登録
app.use(router)

app.mount('#app')
