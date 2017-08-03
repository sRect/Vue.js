import Audit from './components/Audit.vue'
import Home from './components/Home.vue'

export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/audit',
        component:Audit
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