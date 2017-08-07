import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './router.config'
import App from './App.vue'

import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-default/index.css'

import $ from 'jquery'
import './assets/js/common2.js'

import filters from './filters'

//Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Object.keys(filters).forEach(item => {Vue.filter(item,filters[item])})

Vue.use(ElementUI)
Vue.use(VueRouter)

axios.defaults.baseURL="http://192.168.1.23:8080";
//axios.defaults.header.post["Content-Type"]="application/x-www-form-urlencoded";
Vue.prototype.$http=axios;

const router = new VueRouter({
    mode: 'history', //切换路径模式，变成history模式
    scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})