<template>
  <div class="TagList">
    <h3>文章列表</h3>
    <el-table :data="articles">
      <el-table-column prop="_id" label="文章ID"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="pic" label="封面">
        <template slot-scope="scope">
          <img :src="scope.row.pic" alt="" style="height: 50px">
        </template>
      </el-table-column>
      <el-table-column prop="tags" label="标签">
        <template slot-scope="scope">
          <span v-for="(item, index) in scope.row.tags" :key="index" class="tag-span">{{ item.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- scope.row当前这一行的数据 跳转到tags/edit/${scope.row._id}这个页面-->
          <el-button type="text" width="180" 
          @click="$router.push(`/articles/edit/${scope.row._id}`)">编辑</el-button>
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
      articles: []
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('/articles')
      this.articles = res.data
      console.log(this.articles);
    },
    async remove(row){
      // 引入elementUI会给vue添加全局方法，$confirm(message, title, options)
      this.$confirm(`是否删除该文章`, '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async()=> {
        await this.$http.delete(`/articles/list/${row._id}`)
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

<style scope>
  .tag-span {
    display: inline-block;
    border: 1px solid #d9d9d9;
    background-color: #fafafa;
    margin: 0 8px 5px 0;
    border-radius: 4px;
    padding: 0 7px;
  }
</style>