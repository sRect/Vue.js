<template>
	<div id="navbar">
		<mt-navbar fixed="fixed" v-model="selected" :class="{bgc:true}">
			<mt-tab-item id="1">
				<router-link to='/tabbar' :class="{white: true}">新增业绩</router-link>
			</mt-tab-item>
			<mt-tab-item id="2">
				<router-link to="/circle" :class="{white: true}">房源销控</router-link>
			</mt-tab-item>
			<mt-tab-item id="3">
				<!-- <router-link>进程走势</router-link> -->
			</mt-tab-item>
			<mt-tab-item id="4">
				<!-- <router-link>渠道中心</router-link> -->
			</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<router-view></router-view>

	</div>
</template>

<script>
	export default {
		name: 'navbar',
		data(){
			return {
				selected: '',
				fixed: true
			}
		},
		mounted(){
			this.selected = "1";
		}
	}

</script>

<style scoped>
	.bgc{
		background-color: #666;
	}
	.white{
		color: #fff;
		text-decoration: none;
	}
</style>