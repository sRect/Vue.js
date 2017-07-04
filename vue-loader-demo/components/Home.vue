<template>
	<p>这是主页</p>

	<ul>
		<li><a v-link="{path: '/home/login'}">登录</a></li>
		<li><a v-link="{path: '/home/reg'}">注册</a></li>
	</ul>

	<router-view></router-view>
</template>

<style>
	
</style>