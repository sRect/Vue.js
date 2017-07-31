<template>
    <div id="app">
        <HeaderVue></HeaderVue>
        <Home></Home>
    </div>
</template>

<script>
    import HeaderVue from './components/HeaderVue.vue'
    import Home from './components/Home.vue'
    export default {
        name: 'app',
        components: {
            HeaderVue,
            Home
        }
    }
</script>

<style lang="less">
    @import "./assets/less/common.less";
    @import "./assets/less/public.less";

</style>
