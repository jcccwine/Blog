<template>
  <div class="TagList">
    <el-button type="primary" class="addBtn" @click="dialogVisible = true">添加</el-button>
    <el-dialog
      title="新增"
      :visible.sync="dialogVisible"
      width="30%"
      @close='closeDialog'>
      <el-form>
        <el-form-item label="标签名">
          <el-input v-model="model.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">保 存</el-button>
      </span>
    </el-dialog>
    <el-table :data="tags" style="width: 100%; margin-top: 10px">
      <el-table-column prop="_id" label="ID"></el-table-column>
      <el-table-column prop="name" label="标签名"></el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <!-- scope.row当前这一行的数据 跳转到tags/edit/${scope.row._id}这个页面-->
          <el-button type="text" width="180" 
          @click="edit(scope.row._id)">编辑</el-button>
          <el-dialog
            title="编辑"
            :visible.sync="dialogVisibleEdit"
            width="30%"
            @close='closeDialog'>
            <el-form>
              <el-form-item label="ID">
                <el-input v-model="modelEdit._id" disabled></el-input>
              </el-form-item>
              <el-form-item label="标签名">
                <el-input v-model="modelEdit.name"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisibleEdit = false">取 消</el-button>
              <el-button type="primary" @click="saveEdit(modelEdit._id)">保 存</el-button>
            </span>
          </el-dialog>
          <el-button type="text" width="180" 
          @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {},  //存放创建标签
      modelEdit: {},  // 存放编辑标签时获取的标签内容
      tags: [], // 存放显示标签
      dialogVisible: false,
      dialogVisibleEdit: false,
      disable: true // input框禁止输入
    }
  },
  methods: {
    closeDialog(){
      this.model.name = ''
    },
    async save(){
      await this.$http.post('/tags', this.model)
      this.$message({
        type: 'success',
        message: '保存成功'
      })
      this.dialogVisible = false
      this.fetch()
    },
    async fetch() {
      const res = await this.$http.get('/tags')
      this.tags = res.data
    },
    async edit(rowId) {
      const res = await this.$http.get(`/tags/edit/${rowId}`)
      this.modelEdit = res.data
      this.dialogVisibleEdit = true
    },
    async saveEdit(rowId) {
      await this.$http.put(`/tags/edit/${rowId}`, this.modelEdit)
      this.fetch()
      this.dialogVisibleEdit = false
      this.$message({
        type: 'success',
        message: '修改成功'
      })
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
    this.fetch(),
    this.id && this.fetchEdit()
  }
}
</script>

<style scope>
  .addBtn {
    padding: 8px 25px;
  }
</style>