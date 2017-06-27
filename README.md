# vuejs-demo
	-指令
	-属性
	-过滤器
	-事件
	-交互
	-过渡(动画)
	-组件

## Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>Document</title>
	<script src="lib/vue.js"></script>
	<style>
		[v-cloak]{
			display: none;
		}
	</style>
</head>
<body>
	<div id="box">
		<button @click="push">按钮</button>
		<ul v-cloak>
			<li v-for="val in arr" track-by="$index">
				{{val}}
			</li>
		</ul>
	</div>
</body>
</html>
```
```JavaScript
new Vue({
	el: "#box",
	data: {
		arr: ["apple","orange","banana"],
		json: {
			name:"jack",
			age: 18,
			job: "student"
		}
	},
	methods:{
		push:function(){
			this.arr.push("tomato");
		}
	}
});
```