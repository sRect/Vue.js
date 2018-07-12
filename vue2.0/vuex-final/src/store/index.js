import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutatios'
import getters from './getters'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations
})
