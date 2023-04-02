import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

 // custom csss link

 import './assets/sass/style.scss'
const app = createApp(App)
app.use(createPinia())
app.mount('#app')

// import all of bootstrap js

import * as bootstrap from 'bootstrap';
