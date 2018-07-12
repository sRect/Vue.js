<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>num: {{ num }}</p>
    <button @click.stop.prevent="handleIncreament">increament</button>
    <button @click="handleDecreament">decreament</button>

    <hr>
    <p>
      <b>权限跳转控制</b> <br>
      <router-link to="/admin">跳转admin</router-link>
      <router-link to="/superadmin">跳转超级admin</router-link>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'vuex demo'
    }
  },
  computed: {
    ...mapGetters(['num'])
  },
  methods: {
    handleIncreament() {
      this.$store.dispatch('increament')
    },
    handleDecreament() {
      this.$store.dispatch('decreament')
    }
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
