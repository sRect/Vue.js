<template>
	<div id="tabbar">
		<mt-tabbar fixed="fixed" v-model="selected" :class="{bgc: true}">
			<mt-tab-item id="外卖">
				<p class="czs-tag my-icon"></p>外卖
			</mt-tab-item>
			<mt-tab-item id="订单">
				<p class="czs-bell my-icon"></p>订单
			</mt-tab-item>
			<mt-tab-item id="发现">
				<p class="czs-pokemon-ball my-icon"></p>发现
			</mt-tab-item>
			<mt-tab-item id="我的">
				<p class="czs-user my-icon"></p>我的
			</mt-tab-item>
		</mt-tabbar>
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
			this.selected = "订单"
		}
	}
</script>

<style scoped>
	@import '../assets/fonts/caomei1.2.1/style.css';
	.my-icon{
		margin: 0 0 6px 0;
		font-size: 20px;
	}
	.bgc{
		background-color: #f8f8f8;
		box-shadow: 0 -2px 8px 0 rgba(74,144,226,.1);
	}
</style>