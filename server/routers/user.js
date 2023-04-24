// const router=require('express').Router()
// import express from 'express'
// import db from '../database'
let express=require('express')
let router=express.Router()
let db=require('../database')
router.get('/getinfo',(req,res)=>{
res.send('用户路由接口测试成功')
})
router.post('/login',(req,res)=>{
  // console.log(req.body);
  let {username,password}=req.body
  // console.log(username,password,111);
  let sqlstr='select username,password,money from users where username=? and password=?'
  db.query(sqlstr,[username,password],(err,results)=>{
    if(err||results.length===0){
      // console.log(err.message);
      console.log('登录失败');
      res.send('登录失败')
      return
    }
    // console.log(results);
    // console.log('登录成功,1111111111');
    res.send({
      status:0,
      money:results[0].money,
      username:results[0].username
    })
  })
  
})
router.post('/register',(req,res)=>{
  let {username,password}=req.body
  let sqlstr='insert into users (username,password) values(?,?)'
  db.query(sqlstr,[username,password],(err,results)=>{
    if(err){
      console.log(err.message);
      console.log('注册失败');
      res.send("注册失败")
      return
    }
    console.log('注册成功');
    res.send('注册成功')
  })
  
 
})
router.post('/changemoney',(req,res)=>{
  let {money,username}=req.body
  console.log(money,username);
  let sqlstr='update users set money=? where username=?'
  db.query(sqlstr,[money,username],(err,results)=>{
    if(err){
      console.log(err.message);
      return 
    }
    console.log('更新成功',results);
  })
  res.send('改变余额')
})
// module.exports=router
module.exports= router