import Icon from './components/Icon.vue'
import DatePicker from './components/DatePicker.vue'
import Rate from './components/Rate.vue'
import Upload from './components/Upload.vue'
import ProgressVue from './components/Progress.vue'
import MessageBox from './components/MessageBox.vue'
import Carousel from './components/Carousel.vue'
import NavMenu from './components/NavMenu.vue'

export default [
	{path: '/carousel', component: Carousel},
	{path: '/datePicker', component: DatePicker},
	{path: '/icon', component: Icon},
	{
		path: '/rate', 
		component: Rate,
		children: [
			{path: '/navMenu',component: NavMenu}
		]
	},
	{path: '/upload', component: Upload},
	{path: '/progressVue', component: ProgressVue},
	{path: '/messageBox', component: MessageBox},
	{path: '*', redirect:'/progressVue'}
]


