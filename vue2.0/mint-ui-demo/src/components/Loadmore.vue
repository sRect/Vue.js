<template>
	<div id="loadmore" class="loadmore">
		<mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange">
			<div class="distanceIndex">
				{{distanceIndex}}
			</div>
			<div class="content">
				<ul>
					<li v-for="item in list">{{ item }}</li>
				</ul>
			</div>
			<div slot="top" class="mint-loadmore-top">
				<span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
				<span v-show="topStatus === 'loading'">Loading...</span>
			</div>
		</mt-loadmore>
	</div>
</template>

<script>
	export default {
		name: 'loadmore',
		data(){
			return {
				topPullText: '下拉刷新',
				topLoadingText: '加载中...',
				topDropText: '释放更新',
				topStatus: '',
				list: [1,2,3,4,5,6]
			}
		},
		methods:{
			// onTopLoaded: function() {
			// 	var t = this;
			// 	this.translate = 0,
			// 		setTimeout(function() {
			// 			t.topStatus = "pull"
			// 		}, 200)
			// },
			loadTop(){
				this.list.push("x","y","z");
				console.log(this.$refs)
				// this.$refs.loadmore.onTopLoaded();
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
	.content{
		height: 300px;
		border: 1px solid #000;
		overflow-y: scroll;
	}
	li{
		width: 100%;
		text-align: center;
		padding: 5px 0;
		border-bottom: 1px solid #ccc;
	}
</style>