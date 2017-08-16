<template>
  <div id="app">
    <Home></Home>
    <div>
      <router-view></router-view>
    </div>
    <!--<mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 20" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>-->
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  data () {
    return {
     selected:1
    }
  },
  components:{
    Home
  }
}
</script>

<style>

</style>
