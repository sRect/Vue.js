<template>
  <div id="app">
    <input type="button" value="增加" @click="increament">
    <input type="button" value="减少" @click="decreament">

    <p>现在数字为：{{count}}</p>
    <p>现在为: {{isOdd}}</p>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'app',
  computed: mapGetters([
    'count',
    'isOdd'
  ]),
  methods: mapActions([
    'increament',
    'decreament'
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
