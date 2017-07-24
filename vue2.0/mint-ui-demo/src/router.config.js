import Tabbar from './components/Tabbar.vue'
import Circle from './components/Circle.vue'
import List from './components/List.vue'
import Swipe from './components/Swipe.vue'
import Loadmore from './components/Loadmore.vue'
import Datetime from './components/Datetime.vue'

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
	}, {
		path: 'datetime',
		component: Datetime
	}]
}, {
	path: '/circle',
	component: Circle
}, {
	path: '*',
	redirect: '/tabbar/list'
}]