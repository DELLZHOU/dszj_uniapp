import Vue from 'vue'
import App from './App'

import store from './store'

Vue.config.productionTip = false
import * as filters from './filters' // global filters

App.mpType = 'app'

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.prototype.$store = store
const app = new Vue({
	store,
	...App
})
app.$mount()
