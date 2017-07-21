<template>
	<div id="swipe" class="swipe" prevent="true">
		<mt-swipe :auto="3000" @change="handleChange" :class="{bgc: true}">
		  <mt-swipe-item v-for="(val,index) in imgArr" :key="index">
		  	<img :src="val" @click="get(val)">
		  </mt-swipe-item>
		  <!-- <mt-swipe-item>1</mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item> -->
		</mt-swipe>
	</div>
</template>

<script>
	export default {
		name:'swipe',
		data(){
			return {
				imgArr:[
					'http://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg',
					'http://gw.alicdn.com/imgextra/i4/120/TB27WYFXMojyKJjy0FaXXakspXa_!!120-0-luban.jpg_q50.jpg',
					'http://gw.alicdn.com/imgextra/i3/12/TB2hdTfXWZPyuJjSspmXXX2IXXa_!!12-0-luban.jpg_q50.jpg'
				]
			}
		},
		methods: {
			handleChange(index){
				// console.log(index)
			},
			get(val){
				console.log(val)
			}
		}
	}
</script>

<style scoped lang="less">
	.swipe{
		margin-top: 50px;
		
	}
	.bgc{
		width: 100%;
		height: 140px;
	}

	img{
		width: 100%;
		height: 100%;
	}
	
</style>