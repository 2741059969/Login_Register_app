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
  let {data}=await axios.post('/user/register',{
    username:name,
    password
   })
  
  // console.log(data);
  if(data==="注册成功"){
    console.log(data,'两秒后跳转至登录页');
    
   setTimeout(() => {
    navigate('/home/login')
   }, 2000);
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
      <label><span>账号:</span> <input type="text" value={name} onChange={handlename}  /> </label>
      <label><span>密码: </span> <input type="password" value={password} onChange={handlepassword} /> </label>
      <label><span>确认密码: </span> <input type="password" value={cfpassword}  onChange={handlecfpassword} /> </label>
      <label><input type="submit" value="确认注册"  onClick={registerfunc}/></label>
      
    </div>
  );
}
