// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Button, Calendar, Modal } from 'vue-antd-ui'

import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.config.productionTip = false

Vue.component(Button.name, Button)
Vue.component(Button.Group.name, Button.Group)
Vue.component(Calendar.name, Calendar)
Vue.component(Modal.name, Modal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
