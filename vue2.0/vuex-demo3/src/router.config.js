import Content from './components/Content.vue'
import About from './components/About.vue'
import News from './components/News.vue'

export default [
    {
        path:'/content',
        component:Content
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
        redirect: '/content'
    },
    {
        path: '*',
        redirect: '/content'
    }
]