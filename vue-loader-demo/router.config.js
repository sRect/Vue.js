/**
 * 这个文件，专门用于配置路由
 */
// 引入模块
import Home from './components/Home.vue'
import News from './components/News.vue'



export default{
	'/home':{
		component: Home
	},
	'/news':{
		component: News
	}
}