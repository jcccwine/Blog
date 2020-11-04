module.exports = app => {
  const express = require('express')
  const Tag = require('../../models/Tag.js')
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

  // 将路由挂载到实例下，第一个参数是路由的前半部分地址
  app.use('/admin', router)
  
}