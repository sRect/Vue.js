<template>
  <div id="app">
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="incrementOdd">偶数增加</button>

    <p>当前为：{{count}}</p>
    <p>当前为: {{isOdd}}</p>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed:mapGetters([
    "count",
    "isOdd"
  ]),
  methods:mapActions([
    "increment",
    "decrement",
    "incrementOdd"
  ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
