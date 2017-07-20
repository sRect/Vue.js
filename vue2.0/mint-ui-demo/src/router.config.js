import Tabbar from './components/Tabbar.vue'
import Circle from './components/Circle.vue'

export default [{
	path: '/tabbar',
	component: Tabbar
}, {
	path: '/circle',
	component: Circle
}, {
	path: '*',
	redirect: '/tabbar'
}]