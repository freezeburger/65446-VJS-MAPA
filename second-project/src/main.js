import './assets/main.css'

import TwoColumnLayout from '@/layouts/TwoColumnLayout.vue'
import ViewLayout from '@/layouts/ViewLayout.vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//import axios from 'axios'

const app = createApp(App)

// Enregistremant global de composants
app.component('TwoColumnLayout', TwoColumnLayout)
app.component('ViewLayout', ViewLayout)

app.use(createPinia())
app.use(router)

app.mount('#app')

/* fetch('/api/users')
    .then(response => response.json())
    .then(console.log) */

// axios.get('/api/users').then(res => console.log(res.data))
