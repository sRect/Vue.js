<template>
  <div>
    金额为： {{ detailID | formateCount }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    name: 'News',
    computed: mapGetters([
      'detailID'
    ])
  }
</script>

<style>
  
</style>