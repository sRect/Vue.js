import Vue from 'vue'
import {Table,TableColumn,Input,InputNumber,Button,DatePicker,Pagination} from 'element-ui'
import App from './App.vue'

import $ from 'jquery'
import './assets/js/common2.js'

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(DatePicker)
Vue.use(Pagination)


new Vue({
    el: '#app',
    render: h => h(App)
})
