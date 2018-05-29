import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersistence from 'vuex-persist' // vuex持久化，解决刷新数据丢失问题
import createPersistedState from 'vuex-persistedstate'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// const vuexLocal = new VuexPersistence({ // 配置
//   storage: window.sessionStorage
// });

export default new Vuex.Store({
  modules: {
    mutations
  },
  actions,
  // plugins: [vuexLocal.plugin] // 添加插件
  plugins: [createPersistedState()]
})