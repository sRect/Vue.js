<template>
	<div id="app">
		<Navbar></Navbar>
	</div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
	name: 'app',
	data(){
		return {
			
		}
	},
	components: {
		Navbar
	}
}
</script>

<style>
	@import './assets/less/public.less';
</style>
