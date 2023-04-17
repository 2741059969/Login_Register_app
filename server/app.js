const express=require('express')
const userrouter=require('./routers/user')
// import express from "express"
// import cors from 'cors'
// import userrouter from './routers/user.js'
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
// app.use()
app.get('/hello',(req,res)=>{
  res.send('测试成功')
})
app.use('/user',userrouter)
app.listen(8080,()=>{
  console.log('服务器启动，在8080端口');
})