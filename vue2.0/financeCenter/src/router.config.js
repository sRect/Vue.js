import Audit from './components/Audit.vue'
import Home from './components/Home.vue'

export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/audit/id/:id',
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