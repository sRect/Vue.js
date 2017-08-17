import {FOOTER_SHOW,FOOTER_HIDE} from './type'
// import state from './state'
// import getters from './getters'

const state = {
    footershow:true
}

const mutations = {
    [FOOTER_SHOW](state){
        state.footershow = true
    }
}

const getters = {
    footerShow(state){
        return state.footershow;
    }
}

export default {
    state,
    mutations,
    getters
}