<template>
    <div id="app">
        <HeaderVue></HeaderVue>
        <router-link to="/home" :class="{hide:true}">主页</router-link>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import HeaderVue from './components/HeaderVue.vue'
    import Home from './components/Home.vue'
    export default {
        name: 'app',
        data(){
          return{
          }
        },
        components: {
            HeaderVue,
            Home
        }
    }
</script>

<style lang="less">
    @import "./assets/less/common.less";
    @import "./assets/less/public.less";
    .hide{
        display: none;
    }
</style>
