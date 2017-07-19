<template>
	<div>
		<el-button @click="change">默认按钮</el-button>
		<el-button type="primary">主要按钮</el-button>
		<el-button type="text">文字按钮</el-button>

		<el-button plain @click="get">可自动关闭</el-button>
		<div>
			<span class="text" v-text="msg"></span>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default{
		data: () => {
			return {
				msg: 'default info',
				getMsg: ''
			}
		},
		methods: {
			change: function(){
				this.msg = "welome element-ui"
			},
			get(){
				var self = this;
				axios.get('http://localhost:8080/src/data.txt')
					.then((res) => {
						const h = this.$createElement;

				        this.$notify.success({
				          title: '注意',
				          message: h('i', { style: 'color: teal'}, ''+res.data+'')
				        });
					})
					.catch((err) => {
						console.log(err)
					})
				
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