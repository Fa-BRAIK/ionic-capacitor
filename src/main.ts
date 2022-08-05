import { createApp } from 'vue'


// createApp(App).use(IonicVue).mount('#app')
import { IonicVue } from '@ionic/vue'
import App from './App.vue'
import router from './routes'
import './style'

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app')
})
