<template>
  <div id="app">
    <h1>hello vue</h1>
    <!-- <p>{{msg}}</p>
  <input type="button" value="改变" @click="change">
  -->
  <ul>
    <li>
      <router-link to="/board">留言板</router-link>
    </li>
    <li>
      <router-link to="/login">登录</router-link>
    </li>
  </ul>
  <router-view></router-view>
</div>
</template>

<script>
// export default {
//   // name: 'app',
//   // data () {
//   //   return {
//   //     msg: 'Welcome to Your Vue.js App'
//   //   }
//   // },
//   // methods: {
//   //   change () {
//   //     this.msg = this.msg.split('').reverse().join('');
//   //   }
//   // }
// }
</script>

<style>
  body{
    background-color: #f0f0f0;
  }
</style>
