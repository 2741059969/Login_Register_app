// import mysql from 'mysql'
const mysql=require('mysql')
let db=mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:'admin123',
  database:"wts_project_db1"
})
//查询测试数据
// db.query('select * from users',(err,results)=>{
//   if(err){
//     console.log(err.message);
//     return 
//   }
//   console.log(results);
// })
// db.query("insert into users (username,password) values('xm','abc')",(err,results)=>{
//   if(err){
//     console.log('出错了');
//     return
//   }
// })
module.exports= db