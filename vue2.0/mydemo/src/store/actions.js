import * as types from "./types"

export default {
  gotoDetail: ({ commit }, arg) => {
    commit(types.DETAIL, arg)
  }
}