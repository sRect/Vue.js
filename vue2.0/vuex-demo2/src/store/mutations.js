import {
	INCREATMENT,
	DECREATMENT
} from './types.js'

import getters from './getters.js'

const state = {
	count: 10
}

const mutations = {
	[INCREATMENT](state) {
		state.count++
	},
	[DECREATMENT](state) {
		state.count--
	}
}

export default {
	state,
	mutations,
	getters
}