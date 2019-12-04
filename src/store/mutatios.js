import * as types from './types'

// https://vuex.vuejs.org/zh/guide/mutations.html#mutation
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
const mutatios = {
  [types.INCREAMENT](state) {
    state.num += 1
  },
  [types.DECREAMENT](state) {
    state.num -= 1

    if (state.num < 0) {
      state.num = 0
      alert('不可再减了')
    }
  },
  [types.DOUBLE_INCREAMENT](state) {
    state.num += 20
  },
  [types.DOUBLE_DECREAMENT](state) {
    state.num -= 10
  },
  [types.INCREAMENT_RANDOM](state, payload) {
    state.num += payload
  },
  [types.INCREAMENT_RANDOM](state, payload) {
    state.num += payload
  },
  [types.DECREAMENT_RANDOM](state, payload) {
    state.num -= payload
  },
  [types.LOGIN](state, arg) {
    state.loginInfo.currentuser = arg.username
    // state.loginInfo.commonuser.splice(0, 1, ...arg)
    state.loginInfo.commonuser.push(arg)
    state.isLogin = true
  },
  [types.GENERATEROUTES](state, accessedRouters) {
    state.routers = [...accessedRouters]
  }
}

export default mutatios
