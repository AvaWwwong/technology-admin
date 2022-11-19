import { createApp } from 'vue'
import App from './App.vue'
import components from './components/basic'
import router from './router'

const app = createApp(App)
app.use(components)
app.use(router)
app.mount('#app')