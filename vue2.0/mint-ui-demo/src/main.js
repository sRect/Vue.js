import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import MintUI from 'mint-ui'
import '../node_modules/mint-ui/lib/style.min.css'

import routes from './router.config.js'

Vue.use(VueRouter)
Vue.use(MintUI)

const router = new VueRouter({
	routes
})

new Vue({
	router,
	el: '#app',
	render: h => h(App)
})