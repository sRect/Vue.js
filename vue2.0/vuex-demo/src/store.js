import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

var state = {
	count: 10
}

const mutations = {
	increment(state) {
		state.count++
	},
	decrement(state) {
		state.count--
	}
}

const actions = {
	increment: ({
		commit
	}) => {
		commit('increment')
	},
	decrement: ({
		commit
	}) => {
		commit('decrement')
	},
	incrementOdd: ({
		commit,
		state
	}) => {
		if (state.count % 2 === 0) {
			commit('increment');
		};
	}
}

const getters = {
	count(state) {
		return state.count
	},
	isOdd(state) {
		return state.count % 2 === 0 ? "偶数" : "奇数"
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})