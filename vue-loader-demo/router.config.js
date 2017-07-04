/**
 * 这个文件，专门用于配置路由
 */
// 引入模块
import Home from './components/Home.vue'
import News from './components/News.vue'
import Login from './components/Login.vue'
import Reg from './components/Reg.vue'


export default{
	'/home':{
		component: Home,
		subRoutes: {
			'login':{
				component: Login
			},
			'reg': {
				component: Reg
			}
		}
	},
	'/news':{
		component: News
	}
}