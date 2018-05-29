import * as types from './types'
import getters from './getters'

const state = {
  detailID: 0
}

const mutations = {
  [types.DETAIL](state, arg) {
    state.detailID = arg;
  }
}

export default {
  state,
  mutations,
  getters
}