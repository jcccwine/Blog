const express = require('express')

const app = new express()

app.listen(3000, ()=>{
  console.log('服务器启动成功');
})