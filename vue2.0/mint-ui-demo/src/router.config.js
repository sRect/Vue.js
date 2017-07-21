import Tabbar from './components/Tabbar.vue'
import Circle from './components/Circle.vue'
import List from './components/List.vue'
import Swipe from './components/Swipe.vue'
import Loadmore from './components/Loadmore.vue'

export default [{
	path: '/tabbar',
	component: Tabbar,
	children: [{
		path: 'list',
		component: List
	}, {
		path: 'swipe',
		component: Swipe
	}, {
		path: 'loadmore',
		component: Loadmore
	}]
}, {
	path: '/circle',
	component: Circle
}, {
	path: '*',
	redirect: '/tabbar/list'
}]