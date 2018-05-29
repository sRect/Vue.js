import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import News from '@/components/News'
// import Hot from '@/components/Hot'

const Home = () => import('@/components/Home')
const News = () => import('@/components/News')
const Hot = () => import('@/components/Hot')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/hot',
      name: 'Hot',
      component: Hot,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
