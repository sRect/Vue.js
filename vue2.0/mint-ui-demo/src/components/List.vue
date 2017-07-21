<template>
	<div id="list">
		<mt-index-list>
			<mt-index-section v-for="(val,fatherindex) in arr" :index="val.index" :key="fatherindex">
				<mt-cell v-for="(item,childindex) in val.data" :title="item" :key="childindex" @click.stop.prevent.native="get(item)"></mt-cell>
			</mt-index-section>
		</mt-index-list>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				arr: [
					{"index":"A","data":["Addd","Addf","Apple","Adksjdf"]},
					{"index":"X","data":["Xddd","Xddf","Xpple","Xdksjdf"]},
					{"index":"S","data":["Sddd","Sddf","Spple","Sdksjdf"]},
					{"index":"G","data":["Gddd","Gddf","Gpple","Gdksjdf"]},
					{"index":"U","data":["Uddd","Uddf","Upple","Udksjdf"]},
					{"index":"J","data":["JJdd","Jddf","Jpple","Jdksjdf"]},
					{"index":"M","data":["Mddd","Mddf","Mpple","Mdksjdf"]}
				]
			}
		},
		methods: {
			get(data){
				alert(data)
			}
		}
	}
</script>