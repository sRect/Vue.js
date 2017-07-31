import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-default/index.css'

import $ from 'jquery'
import './assets/js/common2.js'

import filters from './filters'

//Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Object.keys(filters).forEach(item => {Vue.filter(item,filters[item])})

Vue.use(ElementUI)

axios.defaults.baseURL="http://192.168.1.62:8080";
//axios.defaults.header.post["Content-Type"]="application/x-www-form-urlencoded";
Vue.prototype.$http=axios;

new Vue({
    el: '#app',
    render: h => h(App)
})