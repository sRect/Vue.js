<template>
	<div id="tabbar">
		<mt-tabbar fixed="fixed" v-model="selected" :class="{bgc: true}">
			<mt-tab-item id="外卖">
				<p class="czs-tag my-icon"></p>
				<router-link to="/tabbar/list">外卖</router-link>
			</mt-tab-item>
			<mt-tab-item id="订单">
				<p class="czs-bell my-icon"></p>
				<router-link to="/tabbar/swipe">订单</router-link>
			</mt-tab-item>
			<mt-tab-item id="发现">
				<p class="czs-pokemon-ball my-icon"></p>
				<router-link to="/tabbar/loadmore">发现</router-link>
			</mt-tab-item>
			<mt-tab-item id="我的">
				<p class="czs-user my-icon"></p>
				<router-link to="/tabbar/datetime">我的</router-link>
			</mt-tab-item>
		</mt-tabbar>

		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tabbar',
		data(){
			return{
				fixed: true,
				selected: ""
			}
		},
		mounted(){
			this.selected = "外卖"
		}
	}
</script>

<style scoped>
	@import '../assets/fonts/caomei1.2.1/style.css';
	.content{
		margin-top: 66px;
	}
	.my-icon{
		margin: 0 0 6px 0;
		font-size: 20px;
	}
	.bgc{
		background-color: #f8f8f8;
		box-shadow: 0 -2px 8px 0 rgba(74,144,226,.1);
	}
</style>