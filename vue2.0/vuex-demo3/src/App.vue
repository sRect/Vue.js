<template>
  <div id="app">
    <HeaderVue></HeaderVue>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderVue from './components/HeaderVue.vue'

export default {
  name: 'app',
  data () {
    return {
     selected:1
    }
  },
  components:{
    HeaderVue
  }
}
</script>

<style>
  .hide{
    display:none;
  }
</style>
