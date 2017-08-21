<template>
  <div id="home">
      <h2>这是首页</h2>
      <div>
        <mt-button type="default" @click="increment">增加</mt-button>
        <mt-button type="danger" @click="decreament">减少</mt-button>
      </div>

      <mt-badge type="primary">{{getCount}}</mt-badge>
      <p>{{isOdd}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name:'home',
  computed: mapGetters([
    'getCount',
    'isOdd'
  ]),
  data(){
    return {
      
    }
  },
  methods:{
    increment(){
      this.$store.dispatch("increment")
    },
    decreament(){
      this.$store.dispatch("decreament")
    }
  }
}
</script>

