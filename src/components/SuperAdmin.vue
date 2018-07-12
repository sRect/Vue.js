<template>
  <div class="superadmin">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'SuperAdmin',
  data() {
    return {
      msg: '我是需要超级admin权限查看的页面'
    }
  }
}
</script>
