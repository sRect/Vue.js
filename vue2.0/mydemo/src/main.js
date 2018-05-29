// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios'
import store from './store'
import filters from './filters'

import {
  Menu,
  Submenu,
  MenuItem,
  Table,
  TableColumn,
  Button
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(axios);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Button);

Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
