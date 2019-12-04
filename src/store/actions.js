import * as types from './types'
import { asyncRouterMap } from '../router'

export default {
  // https://vuex.vuejs.org/zh/guide/actions.html#action
  increament: (context) => {
    console.log(context)
    context.commit(types.INCREAMENT)
  },
  decreament: ({ commit }) => {
    commit(types.DECREAMENT)
  },
  actionA({commit}) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit(types.DOUBLE_INCREAMENT)
        resolve()
      }, 1000)
    })
  },
  // actionB({dispatch, commit}) {
  //   return dispatch('actionA').then(() => {
  //     commit(types.DOUBLE_DECREAMENT)
  //   })
  // },
  async actionB({ dispatch, commit }) {
    await dispatch('actionA')
    commit(types.DOUBLE_DECREAMENT)
  },
  increament_radom({commit}, radom) {
    console.log(111)
    commit(types.INCREAMENT_RANDOM, radom)
  },
  login: ({ commit, state }, arg) => {
    return new Promise((resolve, reject) => {
      if (arg.username.trim() === state.loginInfo.admin.username) {
        if (arg.password !== state.loginInfo.admin.password) {
          reject(new Error('登录错误'))
        } else {
          commit(types.LOGIN, arg)
          resolve('ok')
        }
      } else {
        commit(types.LOGIN, arg)
        resolve('ok')
      }
    })
  },
  GenerateRoutes: ({ commit, state }, role) => {
    let roleLowerCase = role.toLowerCase()
    let accessedRouters = []

    return new Promise((resolve) => {
      // 根据权限需要加载的路由
      accessedRouters = asyncRouterMap.filter(item => {
        if (item.meta && item.meta.role) {
          return item.meta.role.indexOf(roleLowerCase) >= 0
        }
        // if (role === types.ADMIN) {
        //   return item.meta.role.indexOf(roleLowerCase) >= 0
        // } else if (role === types.SUPERADMIN) {
        //   return item.meta.role.indexOf(roleLowerCase) >= 0
        // } else {
        //   return []
        // }
      })
      commit(types.GENERATEROUTES, accessedRouters)
      resolve()
    })
  }
}
