<template>
  <div id="app">
    <ButtonVue></ButtonVue>

    <ul>
      <li>
        <router-link to="/carousel">轮播图</router-link>
      </li>
      <li>
        <router-link to="/datePicker">日期选择</router-link>
      </li>
      <li>
        <router-link to="/icon">icon</router-link>
      </li>
      <li>
        <router-link to="/rate">评分</router-link>
      </li>
      <li>
        <router-link to="/upload">上传</router-link>
      </li>
      <li>
        <router-link to="/progressVue">进度条</router-link>
      </li>
      <li>
        <router-link to="/messageBox">messageBox</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import ButtonVue from './components/Button.vue'

  export default {
    data() {
      return {
        msg: 'default'
      }
    },
    methods: {
      change() {
        this.msg = "changed..."
      }
    },
    components: {
      ButtonVue
    }
  }
</script>

<style scoped lang="less">
  .router-link-active{
    color: #f40;
    font-size: 20px;
  }
</style>
