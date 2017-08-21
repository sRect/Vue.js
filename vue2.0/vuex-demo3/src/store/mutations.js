import { FOOTER_SHOW, FOOTER_HIDE, INCREMENT, DECREMENT } from './type'
// import state from './state'
// import getters from './getters'
import { Toast } from 'mint-ui';

const state = {
    footershow: true,
    count: 0
}

const mutations = {
    [FOOTER_SHOW](state) {
        state.footershow = true
    },
    [FOOTER_HIDE](state) {
        state.footershow = false
    },
    [INCREMENT](state) {
        state.count++;
    },
    [DECREMENT](state) {
        if (state.count < 1) {
            Toast({
                message: '最小数为0',
                position: 'center',
                duration: 2000
            });
            return;
        }else{
            state.count--;
        }  

    }
}

const getters = {
    footerShow(state) {
        return state.footershow;
    },
    getCount(state) {
        return state.count;
    },
    isOdd(state){
        return state.count % 2 === 0 ? '偶数' : '奇数'
    }
}

export default {
    state,
    mutations,
    getters
}