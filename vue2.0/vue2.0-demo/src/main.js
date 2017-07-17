import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-default/index.css'

import routes from './routerConfig.js'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
	routes
})

new Vue({
	router,
  	el: '#app',
  	render: h => h(App)
})
