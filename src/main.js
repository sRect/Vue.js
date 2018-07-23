// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let routerIsAdd = false
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next()
  } else {
    if (store.getters.commonuser.length !== 0 && !routerIsAdd) {
      const role = store.getters.currentuser.toUpperCase()

      store.dispatch('GenerateRoutes', role).then(() => {
        router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
        routerIsAdd = true
        next(...to)
        // next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
      }).catch((error) => {
        console.log(error)
        console.log('权限认证失败')
      })
    } else {
      next() // 当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
    }
  }

  // if (to.path === '/' && from.path === '/helloworld') {
  //   window.location.replace('/')
  //   router.replace({ path: '/' })
  // }
})

// 全局后置钩子 进入路由之后
router.afterEach((to, from) => {
  if (to.path === '/' && from.path === '/helloworld') {
    window.location.replace('/')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
