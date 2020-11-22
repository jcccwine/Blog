<template>
  <div class="blogContent">
    <el-form 
    :model="model"
    :rules="rules" 
    ref="model" 
    @submit.native.prevent="save" 
    label-width="80px" 
    class="demo-ruleForm">
      <el-form-item label="标题" style="margin-bottom: 20px" prop="title">
        <el-input style="width: 300px" placeholder="请输入文章标题" v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="封面" prop="pic">
        <!-- action: 上传的接口地址 -->
        <el-upload
          class="avatar-uploader"
          action="http://localhost:3000/admin/uploads" 
          :show-file-list="false"
          :on-success="afterUpload">
          <img v-if="model.pic" :src="model.pic" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="标签" prop="tags">
        <el-select v-model="model.tags" multiple placeholder="请选择文章标签">
          <el-option 
          v-for="item in tags" 
          :key="item._id" 
          :label="item.name" 
          :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容" prop="body">
        <mavon-editor v-model="model.body" style="height: 800px; z-index: 0"></mavon-editor>
      </el-form-item>
      <el-form-item>
        <el-button class="el-btn" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  components: {
    mavonEditor
  },
  props: {
    id: {}
  },
  data(){
    return {
      model: {},
      tags: [],
      rules: {
        title: [
          {required: true, message: '请输入标题', trigger: 'blur'}
        ],
        pic: [
          {required: true, message: '请选择图片', trigger: 'change'}
        ],
        tags: [
          {required: true, message: '请选择标签', trigger: 'change'}
        ],
        body: [
          {required: true, message: '请输入文章内容', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    afterUpload(res){
      this.$set(this.model, 'pic', res.url)
      console.log(this.model);
    },
    async save() {
      if (this.id) { 
        await this.$http.put(`/articles/edit/${this.id}`, this.model)
      }
      else {
        await this.$http.post('/articles', this.model)
      }
      this.$message({
        type: 'success',
        message: '保存成功'
      })
      this.$router.push('/articles/list')
    },
    // 获取tag内容
    async fetchGetTags() {
      const res = await this.$http.get('/tags')
      this.tags = res.data
      console.log(this.tags, 'tags');
    },
    async fetch(){
      const res = await this.$http.get(`/articles/edit/${this.id}`)
      this.model = res.data
      console.log(this.model);
    }
  },
  created() {
    this.fetchGetTags()
    this.id && this.fetch()
  },

}
</script>

<style scope>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-form-item__error {
    font-size: 13px;
  }
  .el-form-item {
    margin-bottom: 30px;
  }
  .el-form-item__content {
    line-height: 30px;
  }
  .el-btn {
    position: fixed;
    top: 100px;
    right: 20px;
    z-index: 1;
    width: 100px;
  }
</style>