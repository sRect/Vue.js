import loadingComponent from './Loading.vue'

const loading = {
	install: (Vue) => {
		Vue.component('Loading',loadingComponent)
	}
}

export default loading