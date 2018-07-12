import * as types from './types'

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
          resolve('ok')
        }
      } else {
        commit(types.LOGIN, arg)
        resolve('ok')
      }
    })
  }
}
