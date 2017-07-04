<template>
  <div id="app">
    <h1>hello vue</h1>
    <p>{{msg}}</p>
    <input type="button" value="改变" @click="change">
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    change() {
      this.msg = this.msg.split('').reverse().join('');
    }
  }
}
</script>

<style>
  body{
    background-color: #f0f0f0;
  }
</style>
