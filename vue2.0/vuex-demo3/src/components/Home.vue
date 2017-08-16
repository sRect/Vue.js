<template>
    <div id="home">
        <mt-navbar v-model="selected">
            <router-link tag='mt-tab-item' to="/content" id="1">选项一</router-link>
            <router-link tag='mt-tab-item' to="/news" id="2">选项二</router-link>
            <router-link tag='mt-tab-item' to="/about" id="3">选项三</router-link>
            <!--<mt-tab-item id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>-->
        </mt-navbar>
    </div>
</template>

<script>
export default {
  name:'home',
  data(){
      return{
         selected:'1' 
      }
  }
}
</script>

