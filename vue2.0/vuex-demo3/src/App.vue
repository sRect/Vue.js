<template>
  <div id="app">
    <HeaderVue></HeaderVue>
    <div>
      <router-view></router-view>
    </div>
    <FooterVue v-show="footerShow"></FooterVue>
  </div>
</template>

<script>
import HeaderVue from './components/HeaderVue.vue'
import FooterVue from './components/FooterVue.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: mapGetters([
    'footerShow'
  ]),
  data() {
    return {
      selected: 1
    }
  },
  components: {
    HeaderVue,
    FooterVue
  },
  watch: { //监听路由变化
    $route(to, from) {
      let path = to.path.substring(1);
      this.footerChange(path)
    }
  },
  methods: {
    footerChange(path) {
      if (path.includes('about')) {
        this.$store.dispatch('showFooter')
      } else {
        this.$store.dispatch('hideFooter')
      }
    }
  },
  mounted() {
    console.log(this.footerShow)
    let path = this.$route.path.substring(1);
    this.footerChange(path)
  }
}
</script>

<style>
.hide {
  display: none;
}
</style>
