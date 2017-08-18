import * as types from './type'

export default {
    showFooter: ({ commit }) => {
        commit(types.FOOTER_SHOW)
    },
    hideFooter: ({ commit }) => {
        commit(types.FOOTER_HIDE)
    },
    increment:({commit}) => {
        commit(types.INCREMENT)
    }
}