import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import Router from './router'
import './assets/css/tailwind.css'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(Router)
app.use(autoAnimatePlugin)
app.mount('#app')
