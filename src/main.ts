import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/sass/style.scss'
import './assets/sass/theme.css'
import PrimeVue from 'primevue/config'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true })
app.mount('#app')
