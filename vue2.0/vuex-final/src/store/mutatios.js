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
  }
}

export default mutatios
