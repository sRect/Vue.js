import Vue from 'vue'
import {Table,TableColumn} from 'element-ui'
import App from './App.vue'

import $ from 'jquery'
import './assets/js/common2.js'

Vue.use(Table)
Vue.use(TableColumn)


new Vue({
    el: '#app',
    render: h => h(App)
})
