<template>
	<div id="datetime" class="datetime">
		<input type="text" placeholder="请选择" readonly="readonly" v-model="myDate" @click="openPicker">
		<mt-datetime-picker
		   ref="picker"
		   type="date"
		   year-format="{value} 年"
		   month-format="{value} 月"
		   date-format="{value} 日"
		   v-model="pickerVisible"
		   @confirm="handleConfirm">
		 </mt-datetime-picker>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		name: 'datetime',
		data(){
			return {
				myDate: '',
				pickerVisible : ''
			}
		},
		methods: {
			openPicker() {
				this.$refs.picker.open();
			},
			handleConfirm(e) {
				this.myDate = e.toLocaleDateString();
				console.log(e.toLocaleDateString())

				Toast({
				  message: '获取成功 '+e.toLocaleDateString(),
				  position: 'center',
				  duration: 3000
				});
			}
		}
	}
</script>

<style scoped>
	.datetime{
		margin-top: 50px;
	}
</style>