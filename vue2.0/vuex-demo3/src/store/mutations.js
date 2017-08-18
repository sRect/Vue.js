import { FOOTER_SHOW, FOOTER_HIDE,INCREMENT } from './type'
// import state from './state'
// import getters from './getters'

const state = {
    footershow: true,
    count:0
}

const mutations = {
    [FOOTER_SHOW](state) {
        state.footershow = true
    },
    [FOOTER_HIDE](state) {
        state.footershow = false
    },
    [INCREMENT](state){
        state.count++;
    }
}

const getters = {
    footerShow(state) {
        return state.footershow;
    },
    getCount(state){
        return state.count;
    }
}

export default {
    state,
    mutations,
    getters
}