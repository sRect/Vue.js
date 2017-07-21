<template>
	<div id="loadmore" class="loadmore">
		<mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange">
			<ul>
				<li v-for="item in list">{{ item }}</li>
			</ul>
			<div slot="top" class="mint-loadmore-top">
				<span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
				<span v-show="topStatus === 'loading'">加载中...</span>
			</div>
		</mt-loadmore>
	</div>
</template>

<script>
	export default {
		name: 'loadmore',
		data(){
			return {
				topStatus: '下拉刷新',
				list: [1,2,3,4,5,6]
			}
		},
		methods:{
			loadTop(){
				this.list.push("x","y","z");
				this.$refs.loadmore.onTopLoaded();
			},
			handleTopChange(status) {
				this.topStatus = status;
			},
		}
	}
</script>

<style scoped>
	.loadmore{
		height: 100%;
	}
	li{
		width: 100%;
		text-align: center;
		padding: 5px 0;
		border-bottom: 1px solid #ccc;
	}
</style>