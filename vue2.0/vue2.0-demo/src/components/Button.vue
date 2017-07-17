<template>
	<div>
		<el-button @click="change">默认按钮</el-button>
		<el-button type="primary">主要按钮</el-button>
		<el-button type="text">文字按钮</el-button>
		<div>
			<span class="text" v-text="msg"></span>
		</div>
	</div>
</template>

<script>
	export default{
		data: () => {
			return {
				msg: 'default info'
			}
		},
		methods: {
			change: function(){
				this.msg = "welome element-ui"
			}
		},
		mounted: function(){
			setTimeout(() => {
				this.change();
			}, 1000);
		}
	}
</script>

<style scoped lang="less">
	.text{
		color: deepskyblue;
	}
</style>