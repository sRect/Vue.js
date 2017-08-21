export default {
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