<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>num: {{ num }} || {{num2}}</p>
    <button @click.stop.prevent="handleIncreament">increament</button>
    <button @click="handleDecreament">decreament</button>
    <button @click="actionA">double increament 10</button>
    <button @click="actionB">double decreament 5 + double increament 10 </button>
    <button @click="increateRandom">commit increament random</button>
    <button @click="decreateRandom(random)">commit decreament random</button>
    <hr>
    <p>
      <b>权限跳转控制</b> <br>
      <router-link to="/admin" v-if="currentuser === 'admin'">跳转admin</router-link>
      <router-link to="/superadmin"  v-if="currentuser === 'superadmin'">跳转超级admin</router-link>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import * as types from '../store/types'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'vuex demo',
      n: 10
    }
  },
  computed: {
    // ...mapState(['num', 'currentuser'])
    // https://vuex.vuejs.org/zh/guide/getters.html#mapgetters-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0
    ...mapGetters(['num', 'currentuser']),
      num2(state) {
      return state.num + this.n
    },
    random() {
      return ~~(Math.random() * 10).toFixed(0)
    }
  },
  // https://vuex.vuejs.org/zh/guide/state.html#mapstate-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0
  // computed: mapState({
  //   num: state => state.num,
  //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   num2(state) {
  //     return state.num + this.n
  //   },
  //   currentuser: 'currentuser'
  // }),
  methods: {
    // handleIncreament() {
    //   this.$store.dispatch('increament')
    // },
    // https://vuex.vuejs.org/zh/guide/actions.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%AD%E5%88%86%E5%8F%91-action
    ...mapActions({
      handleIncreament: 'increament'
    }),
    ...mapActions(['actionA', 'actionB', 'increament_radom']),
    handleDecreament() {
      this.$store.dispatch('decreament')
    },
    // https://vuex.vuejs.org/zh/guide/mutations.html#%E6%8F%90%E4%BA%A4%E8%BD%BD%E8%8D%B7%EF%BC%88payload%EF%BC%89
    increateRandom() {
      this.$store.commit(types.INCREAMENT_RANDOM, this.random)
    },
    // https://vuex.vuejs.org/zh/guide/mutations.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%AD%E6%8F%90%E4%BA%A4-mutation
    ...mapMutations({
      decreateRandom: types.DECREAMENT_RANDOM
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
