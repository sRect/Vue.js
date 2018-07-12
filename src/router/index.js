import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Error from '@/components/Error'

Vue.use(Router)

// 所有权限通用路由表
// 如首页和登录页和一些不用权限的公用页面
export const constantRouterMap = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

// 实例化vue的时候只挂载constantRouter
export default new Router({
  routes: constantRouterMap
})

// 异步挂载的路由
// 动态需要根据权限加载的路由表
// 这里有一个需要非常注意的地方就是 404 页面一定要最后加载，如果放在constantRouterMap一同声明了404，后面的所以页面都会被拦截到404
export const asyncRouterMap = [
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      role: ['admin'] // 页面需要的权限
    }
  },
  {
    path: '*',
    name: 'Error',
    component: Error,
    redirect: '/error'
  }
]
