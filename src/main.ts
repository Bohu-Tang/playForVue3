import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "@/routes"

import '@/styles/index.scss'
import pinia from "@/store"

const app = createApp(App)


app.use(ElementPlus)
    .use(router)
    .use(pinia)
    .mount('#app')
