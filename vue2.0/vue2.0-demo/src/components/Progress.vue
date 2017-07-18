<template>
	<div>
		<el-progress type="circle" :percentage="num" :status="sta"></el-progress>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				num: 0,
				sta: ''
			}
		},
		methods: {
			change(){
				// let self = this;
				let timer = null;
				let _handle = () => {
					if(this.num < 100) {
						this.num+=10;
						this.sta='';
					}else if(this.num = 100){
						this.num = 0;
						this.sta = "success"
					}
				};

				clearInterval(timer);
				timer = setInterval(_handle, 1000);
			}
		},
		mounted: function(){
			this.change();
		}
	}
</script>