import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from "./store"

import './assets/sass/main.sass'

const app = createApp(App)

app.use(router)
app.use(store)


app.mount('#app')
