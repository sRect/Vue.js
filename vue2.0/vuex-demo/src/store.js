import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

var state = {
	count: 10
}

const mutations = {
	increment(state) {
		state.count++
	}
}

const actions = {
	increment: ({
		commit
	}) => {
		commit('increment')
	}
}

const getters = {
	count(state) {
		return state.count
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})