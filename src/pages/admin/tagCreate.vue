<template>
  <div class="TagContent">
    <h1>{{id ? '编辑':'新增'}}</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="标签名">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data(){
    return {
      model: {}
    }
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`/tags/${this.id}`, this.model)
      }
      else {
        await this.$http.post('/tags', this.model)
      }
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    }
  }
}
</script>