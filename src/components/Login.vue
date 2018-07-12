<template>
  <div class="login">
    <p>用户名：<input type="text" v-model="username" placeholder='请输入用户名...'></p>
    <p>密&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" v-model="password" placeholder='请输入密码...'></p>
    <p><button @click="handleLogin">登录</button></p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      let loginInfo = {
        username: this.username,
        password: Number.parseInt(this.password)
      }

      if (!this.username && !this.password) {
        alert('请输入用户名/密码')
        return
      }

      this.$store
        .dispatch('login', loginInfo)
        .then(data => {
          console.log(data)
          this.$router.push({ path: '/helloworld' }) // 登录成功之后重定向到首页
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>
