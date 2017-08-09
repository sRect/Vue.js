import Audit from './components/Audit.vue'
import Home from './components/Home.vue'
import Statement from './components/Statement.vue'

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
        path:'/statement',
        component:Statement
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