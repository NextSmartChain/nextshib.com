import Vue from 'vue'
import VueSocialSharing from 'vue-social-sharing'
import router from './router'
import { store } from './store'
import App from './App.vue'
import './assets/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import VueQRCodeComponent from 'vue-qrcode-component'

Vue.config.productionTip = false
Vue.component('qr-code', VueQRCodeComponent)

Vue.use(VueSocialSharing)
Vue.use(VueAxios,axios)

new Vue({
  render: h => h(App),
  store,
  router,
  components: { App }
}).$mount('#app')
