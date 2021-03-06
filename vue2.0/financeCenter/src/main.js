import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './router.config'
import App from './App.vue'

import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-default/index.css'

import $ from 'jquery'
import './assets/js/common2.js'
import Exceltoexport from './components/exceltoexport'

import filters from './filters'
import { Loading } from 'element-ui';
//Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Object.keys(filters).forEach(item => {Vue.filter(item,filters[item])})

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Exceltoexport)

axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
 //axios.defaults.baseURL="http://192.168.1.49:8080";
axios.defaults.baseURL="http://www.ehaofangwang.com";
Vue.prototype.$http=axios;

let loadingInstance = null;
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
    loadingInstance = Loading.service({
        text:'正在加载...'
    });
    return config;
}, function (error) {
    loadingInstance.close()
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
    loadingInstance.close()
    return response;
}, function (error) {
    loadingInstance.close()
    return Promise.reject(error);
});


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