export default {
  num(state) {
    return state.num
  },
  currentuser(state) {
    return state.loginInfo.currentuser
  },
  addRouters(state) {
    return state.routers
  },
  isLogin(state) {
    return state.isLogin
  }
}
