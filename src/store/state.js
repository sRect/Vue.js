import { constantRouterMap } from '../router'

const state = {
  num: 0,
  routers: constantRouterMap,
  loginInfo: {
    currentuser: '',
    admin: {
      username: 'admin',
      password: 123
    },
    commonuser: []
  },
  isLogin: false
}

export default state
