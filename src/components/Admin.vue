<template>
  <div class="admin">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      msg: '我是需要admin权限查看的页面'
    }
  }
}
</script>
