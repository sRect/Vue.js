<template>
	<div class="content">
		<el-input v-model="show" placeholder="请输入内容"></el-input>

		<transition-group enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
			<div class="animated transitionBox" v-show="show" v-for="(val,index) in lists" :key="index">
				{{val}}
			</div>
		</transition-group>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				arr: ['apple','peal','orange','banana','watermelon'],
				show: ''
			}
		},
		computed: {
			lists(){
				let newArr = [];
				this.arr.forEach((val,index)=>{
					if (val.indexOf(this.show) != -1) {
						newArr.push(val);
					};
				});
				return newArr;
			}
		}
	}
</script>

<style scoped lang="less">
	@main:#fff;

	.content{
		width: 550px;
		margin: 0 auto;
		.transitionBox{
			width: 100px;
			height: 100px;
			background: deepskyblue;
			color: @main;
			text-align: center;
			line-height: 100px;
			margin: 0 auto 5px;
		}
	}
</style>