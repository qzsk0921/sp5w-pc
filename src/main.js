import Vue from 'vue'

import 'normalize.css/normalize.css'

import '@/styles/base.css'
import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'
import store from './store'
import './icons'
import './permission'

// import ElementUI from 'element-ui'
import { Carousel, CarouselItem } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.component(Carousel.name, Button)
// Vue.component(CarouselItem.name, Select)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
