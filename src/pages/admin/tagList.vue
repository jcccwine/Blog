<template>
  <div class="TagList">
    <h3>标签列表</h3>
    <el-table :data="tags">
      <el-table-column prop="_id" label="ID"></el-table-column>
      <el-table-column prop="name" label="标签名"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <!-- scope.row当前这一行的数据 跳转到tags/edit/${scope.row._id}这个页面-->
          <el-button type="text" width="180" 
          @click="$router.push(`/tags/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" width="180" 
          @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: []
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('/tags')
      this.tags = res.data
    },
    async remove(row){
      // 引入elementUI会给vue添加全局方法，$confirm(message, title, options)
      this.$confirm(`是否删除标签${row.name}`, '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async()=> {
        await this.$http.delete(`/tags/list/${row._id}`)
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        this.fetch()
      })
    }
  },
  created(){
    this.fetch()
  }
}
</script>