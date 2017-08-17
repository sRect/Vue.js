import Home from './components/Home.vue'
import About from './components/About.vue'
import News from './components/News.vue'

export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/news',
        component:News
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '*',
        redirect: '/home'
    }
]