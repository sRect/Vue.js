import * as types from './types'

export default {
  increament: ({ commit }) => {
    commit(types.INCREAMENT)
  },
  decreament: ({ commit }) => {
    commit(types.DECREAMENT)
  }
}
