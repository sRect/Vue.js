import * as types from './types'

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
  [types.LOGIN](state, arg) {
    state.loginInfo.currentuser = arg.username
    state.loginInfo.commonuser.push(arg)
    state.isLogin = true
  },
  [types.GENERATEROUTES](state, accessedRouters) {
    state.routers = [...state.routers, ...accessedRouters]

    console.log(state.routers)
  }
}

export default mutatios
