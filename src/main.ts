import './assets/main.css'

import { createApp, ref } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { getContext, removeSecurityContext } from '@/helpers/Security.ts'

axios.defaults.baseURL = 'http://localhost:8080'

const vuetify = createVuetify({
  components,
  directives,
})

axios.interceptors.request.use((config) => {
  const context = getContext()
  if (context) config.headers.Authorization = `Bearer ${context.accessToken}`
  return config
})

axios.interceptors.response.use(null, (err) => {
  if(err.status === 401) {
    removeSecurityContext()
    router.push({name: 'login'})
  }
})
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(vuetify)

app.mount('#app')
