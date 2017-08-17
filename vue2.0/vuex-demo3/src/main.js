import Vue from 'vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import routes from './router.config'
import 'mint-ui/lib/style.css'
import App from './App.vue'

import store from './store/store'

Vue.use(VueRouter)
Vue.use(MintUI)

const router = new VueRouter({
  mode: 'history', //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
