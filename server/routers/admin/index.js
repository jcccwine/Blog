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

  // 将路由挂载到实例下，第一个参数是路由的前半部分地址
  app.use('/admin', router)
  
}