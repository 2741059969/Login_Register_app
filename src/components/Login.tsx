import {useContext,useState} from 'react';
import styles from '../styles/Login.module.css'
import MyContext from '../global-context'
import { useNavigate } from 'react-router-dom';
export interface ILoginProps {
}

export default function Login (props: ILoginProps) {
  let {axios}=useContext(MyContext)
   let navigate=useNavigate()
  let [name,changename]=useState('')
  let [password,changepassword]=useState('')
  const loginfunc=async ()=>{
    // console.log('点击登陆了');
    if(! /\w{6,18}/.test(name)){
       alert('应该输入6到18位字符，只能包括字母数字和下划线')
       return
    }
   let {data}=await axios.post('/user/login',{
    username:name,
    password:password
   })
   let {status,username,money}=data
  //  console.log('点击登陆了111');
  //  console.log(data);
   if(status===0){
    navigate('/user',{state:{username,money}})
   }
  }
  let handlename=(e:React.ChangeEvent<HTMLInputElement>)=>{
    
    changename(e.target.value)
  }
  let handlepassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
    // console.log(e.target.value);
     changepassword(e.target.value)
    //  console.log(password);
     
  }
  return (
    <div className={`${styles.root}`}>
      <label><span>用户名:</span> <input placeholder="请输入用户名" type="text" value={name} onChange={handlename} /> </label>
      <label><span>密码: </span> <input placeholder="请输入密码" type="password" value={password} onChange={handlepassword}/> </label>
      <label className={`${styles.loginbtn}`}><span onClick={loginfunc}>登录</span></label>
    </div>
  );
}
