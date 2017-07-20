import Tabbar from './components/Tabbar.vue'
import Circle from './components/Circle.vue'
import List from './components/List.vue'

export default [{
	path: '/tabbar',
	component: Tabbar,
	children: [{
		path: 'list',
		component: List
	}]
}, {
	path: '/circle',
	component: Circle
}, {
	path: '*',
	redirect: '/tabbar'
}]