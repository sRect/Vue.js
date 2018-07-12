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
  islogin(state) {
    return state.islogin
  }
}
