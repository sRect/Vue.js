import * as types from './types'

export default {
	increament: ({
		commit
	}) => {
		commit(types.INCREATMENT)
	},
	decreament: ({
		commit
	}) => {
		commit(types.DECREATMENT)
	}
}