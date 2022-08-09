import {createApp} from 'vue'
import App from './App.vue'
import ElContainer from './components/container'
import './styles/index.scss'

const app = createApp(App)

app.use(ElContainer)
    .mount('#app')
