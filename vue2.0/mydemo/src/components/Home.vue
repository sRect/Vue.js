<template>
  <div class="table">
    <el-table
      :data="tableData3"
      style="width: 100%"
      height="250">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        :show-overflow-tooltip="true"
        label="省份">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        label="操作"
        fixed="right"
        width="120">
        <template slot-scope="scope">
          <el-button
            type="text"
            @click="gotoDetail(scope.row)"
            size="small">
            查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      pageNum: 0,
      pageSize: 20,
      tableData3: []
    }
  },
  methods: {
    getData() {
      this.$http.post("/getHomeData", {
        "pageNum": this.pageNum,
        "pageSize": this.pageSize
      }).then(data => {
        this.tableData3 = data.data.data;
      }).catch(error => {
        console.log(error)
      })
    },
    gotoDetail(val) {
      console.log(val)
      this.$store.dispatch('gotoDetail', val.id);
    }
  },
  mounted() {
    this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  width: 100%;  
}
</style>
