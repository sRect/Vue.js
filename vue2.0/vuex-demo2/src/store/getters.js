// const getters = {
// 	count(state) {
// 		return state.count
// 	}
// }

export default {
	count(state) {
			return state.count;
		},
		isOdd(state) {
			return state.count % 2 === 0 ? "偶数" : "奇数";
		}
}