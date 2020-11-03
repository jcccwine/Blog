const express = require('express')

const app = new express()

app.use(express.json())
// 引用跨域模块
app.use(require('cors')())
// 调用连接数据库模块
require('./plugin/db.js')(app)
require('./routers/admin/index.js')(app)

app.listen(3000, ()=>{
  console.log('服务器启动成功');
})