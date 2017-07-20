import Vue from 'vue'

import App from './App.vue'

// import './mint-ui.js'


import {
	Button,
	Header,
	Toast
} from 'mint-ui'


Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Toast.name, Toast)

new Vue({
	el: '#app',
	render: h => h(App)
})