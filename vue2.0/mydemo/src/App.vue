<template>
  <div id="app">
    <div class="nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Home</el-menu-item>
        <el-menu-item index="2">News</el-menu-item>
        <el-menu-item index="3">Hot</el-menu-item>
      </el-menu>
    </div>

    <div>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive">
          <!-- 这里是会被缓存的视图组件 -->
        </router-view>
      </keep-alive>

      <router-view v-if="!$route.meta.keepAlive">
        <!-- 这里是不被缓存的视图组件 -->
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        switch(key) {
          case "1":
            this.$router.push({name: 'Home'});
            break;
          case "2":
            this.$router.push({name: 'News'});
            break;
          case "3":
            this.$router.push({name: 'Hot'});
            break;
          default: 
            break;
        }
      }
    }
  }
</script>

<style>
.nav {
  padding-bottom: 10px;
}
</style>
