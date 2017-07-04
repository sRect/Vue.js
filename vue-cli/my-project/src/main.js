import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Board from './components/Board.vue'
import Login from './components/Login.vue'

Vue.use(VueRouter)

// 配置路由
const routes = [
	{path: '/board', component: Board},
	{path: '/login', component: Login}
]

const router = new VueRouter({
	routes
})

const app = new Vue({
	router
}).$mount('#app')

// new Vue({
//   el: '#app',
//   // render: h => h(App)
// })
