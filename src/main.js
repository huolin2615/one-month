import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import axios from 'axios'
import 'mand-mobile/lib/mand-mobile.css'
import './assets/styles/iconfont.css'
import './assets/styles/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VeLine from 'v-charts/lib/line.common'
import './mock/'
import filters from './filters/index'

Vue.use(MintUI)
Vue.use(vuex)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.component(VeLine.name, VeLine)
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
