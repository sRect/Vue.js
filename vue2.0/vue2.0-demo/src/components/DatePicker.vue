<template>
	<div>
		<div class="block">
			<span class="demonstration">默认</span>
			<el-date-picker
		      v-model="value1"
		      type="date"
		      placeholder="选择日期"
		      :picker-options="pickerOptions0"></el-date-picker>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return{
				value1: '',
				pickerOptions0: {
					disabledDate(time) {
						return time.getTime() < Date.now() - 8.64e7;
					}
				}
			}
		},
		methods: {

		}
	}
</script>