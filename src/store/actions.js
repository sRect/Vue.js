import * as types from './types'
import { asyncRouterMap } from '../router'

export default {
  increament: ({ commit }) => {
    commit(types.INCREAMENT)
  },
  decreament: ({ commit }) => {
    commit(types.DECREAMENT)
  },
  login: ({ commit, state }, arg) => {
    return new Promise((resolve, reject) => {
      if (arg.username === state.loginInfo.admin.username) {
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
  GenerateRoutes: ({ commit }, role) => {
    return new Promise((resolve) => {
      const accessedRouters = asyncRouterMap.filter(item => {
        if (role === types.ADMIN) {
          return item.meta.role.indexOf(role)
        } else if (role === types.SUPERADMIN) {
          return item.meta.role.indexOf(role)
        }
      })

      commit(types.GENERATEROUTES, accessedRouters)
      resolve()
    })
  }
}
