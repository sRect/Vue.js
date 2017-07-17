<template>
	<div>
		<el-carousel :interval="5000" arrow="always">
		    <el-carousel-item v-for="item in arr" :key="item">
		      <img :src="item" alt="">
		    </el-carousel-item>
	    </el-carousel>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				arr: ['http://img12.360buyimg.com/da/jfs/t3172/29/7532815266/78514/96c6e177/58ba3348N479cafe1.jpg',
				'http://img1.360buyimg.com/da/jfs/t6049/60/4838777857/120934/f900fb59/59674450Nf337c487.jpg',
				'http://img20.360buyimg.com/da/jfs/t6085/345/4479188727/142750/5d959611/59646c4dN7afde6bd.jpg',
				'http://img14.360buyimg.com/da/jfs/t5851/327/6252253392/173685/f3ce1fe5/59683045N525f519d.jpg'
				]
			}
		}
	}
</script>

<style scoped>
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 18px;
	    opacity: 0.75;
	    line-height: 300px;
	    margin: 0;
  	}
	  
	.el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	}
	  
	.el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
  	}
</style>