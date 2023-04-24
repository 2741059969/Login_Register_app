import { useState,useContext } from 'react';
import styles from '../styles/Register.module.css'
import MyContext from '../global-context'
import { useNavigate } from 'react-router-dom';
export interface IRegisterProps {
}

export default function Register (props: IRegisterProps) {
  let {axios}=useContext(MyContext)
   let navigate=useNavigate()
  let [name,changename]=useState('')
  let [password,changepassword]=useState('')
  let [cfpassword,changecfpassword]=useState('')
  const registerfunc=async ()=>{
    if(password!==cfpassword){
      alert('注册失败，两次密码不一致')
      return
    }
    if(! /\w{6,18}/.test(name)){
      alert("用户名应输入6到18位字符，只能包括字母数字和下划线")
      return
    }
  let {data}=await axios.post('/user/register',{
    username:name,
    password
   })
  
  // console.log(data);
  if(data==="注册成功"){
    // console.log(data,'两秒后跳转至登录页');
    alert("注册成功，点击确定后跳转至登录页")
    navigate('/home/login')
  }
  else{
    alert("注册失败，用户名已存在")
  }
  }
  
  let handlename=(e:React.ChangeEvent<HTMLInputElement>)=>{
    changename(e.target.value)
    // console.log(name);
    
  }
  let handlepassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
     changepassword(e.target.value)
    //  console.log(password);
     
  }
  let handlecfpassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
     changecfpassword(e.target.value)
    //  console.log(cfpassword);
     
  }
  return (
    <div className={`${styles.root}`}>
      <label><span>用户名:</span> <input  placeholder="请输入用户名" type="text" value={name} onChange={handlename}  /> </label>
      <label><span>密码: </span> <input placeholder="请输入密码" type="password" value={password} onChange={handlepassword} /> </label>
      <label><span>确认密码: </span> <input placeholder="请确认密码" type="password" value={cfpassword}  onChange={handlecfpassword} /> </label>
      <label className={`${styles.registerspan}`}><span onClick={registerfunc} >确认注册</span></label>
      
    </div>
  );
}
