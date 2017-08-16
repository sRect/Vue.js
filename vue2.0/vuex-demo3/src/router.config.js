import Content from './components/Content.vue'

export default [
    {
        path:'/content',
        component:Content
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