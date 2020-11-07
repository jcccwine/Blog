module.exports = app => {
  const express = require('express')
  const multer = require('multer')  // 处理form-data数据
  const Tag = require('../../models/Tag.js')
  const Article = require('../../models/Article.js')
  // 相当于是路由的分支
  const router = express.Router({
    mergeParams: true
  })
  // 创建标签接口
  router.post('/tags', async(req, res) => {
    const model = await Tag.create(req.body)
    res.send(model)
  })
  // 获取标签列表
  router.get('/tags', async(req, res) => {
    const model = await Tag.find().limit(10)
    res.send(model)
  })
  // 编辑标签名称
  router.get('/tags/edit/:id',async(req,res)=>{
    const model = await Tag.findById(req.params.id)
    res.send(model)
  })
  // 编辑再保存
  router.put('/tags/edit/:id', async(req, res) => {
    const model = await Tag.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  // 删除标签
  router.delete('/tags/list/:id', async(req, res) => {
    await Tag.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  // 创建文章接口
  router.post('/articles', async(req, res) => {
    console.log(req.body)
    const model = await Article.create(req.body)
    res.send(model)
  })
  // 获取文章列表接口
  router.get('/articles', async(req, res) => {
    const model = await Article.find().limit(10)
    res.send(model)
  })
  

  // 将路由挂载到实例下，第一个参数是路由的前半部分地址
  app.use('/admin', router)

  // 上传图片
  // 选择某个图片并发起请求后端的接口将图片传给后端，后端的接口保存图片，并将图片的地址返回给前端在页面展示这个图片
  const upload = multer({dest: __dirname + '/../../upload'})
  app.post('/admin/uploads', upload.single('file'), async (req, res)=> {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

}