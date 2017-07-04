<template>
	<!-- <h1>hello Vue</h1>
	<p v-text="msg"></p>
	<button @click="change">点我改变</button>

	<menu-my></menu-my> -->

	<div id="app">
		<ul>
			<li><a v-link="{path: './home'}">主页</a></li>
			<li><a v-link="{path: './news'}">新闻</a></li>
		</ul>

		<router-view></router-view>
	</div>
</template>

<script>
	// import Menu from './components/Menu.vue'

	// export default{
	// 	data: function(){
	// 		return {
	// 			msg: 'welcome vue'
	// 		}
	// 	},
	// 	methods: {
	// 		change: function(){
	// 			this.msg = this.msg.split('').reverse().join('');
	// 		}
	// 	},
	// 	components:{
	// 		'menu-my': Menu
	// 	}
	// }
</script>

<style>
	body: {
		background: #ccc;
	}
	.v-link-active{
		color: #f40;
		font-size: 20px;
	}
</style>