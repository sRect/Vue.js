<template>
  <div id="app">
    <HeaderVue></HeaderVue>
    <div>
      <router-view></router-view>
    </div>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HeaderVue from './components/HeaderVue.vue'
import FooterVue from './components/FooterVue.vue'

export default {
  name: 'app',
  data() {
    return {
      selected: 1
    }
  },
  components: {
    HeaderVue,
    FooterVue
  },
  watch:{ //监听路由变化
    $route(to,from){
      let path = to.path.substring(1);
      this.footerChange(path)
    }
  },
  methods:{
    footerChange(path){
      if(path.includes('about')){
        console.log("进入关于");
      }else{
        console.log('不在关于')
      }
    }
  }
}
</script>

<style>
.hide {
  display: none;
}
</style>
