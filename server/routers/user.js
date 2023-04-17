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
  let sqlstr='select username,password from users where username=? and password=?'
  db.query(sqlstr,[username,password],(err,results)=>{
    if(err||results.length===0){
      // console.log(err.message);
      console.log('登录失败');
      res.send('登录失败')
      return
    }
    console.log(results);
    console.log('登录成功,1111111111');
    res.send('登录成功')
  })
  
})
router.post('/register',(req,res)=>{
  let {username,password}=req.body
  let sqlstr='insert into users (username,password) values(?,?)'
  db.query(sqlstr,[username,password],(err,results)=>{
    if(err){
      console.log(err.message);
      return
    }
    console.log('注册成功');
    res.send('注册成功')
  })
  
 
})
// module.exports=router
module.exports= router