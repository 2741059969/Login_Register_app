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
    console.log('点击登陆了');
    
   let {data}=await axios.post('/user/login',{
    username:name,
    password:password
   })
   console.log('点击登陆了111');
   console.log(data);
   if(data==='登录成功'){
    navigate('/user')
   }
  }
  let handlename=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value);
    
    changename(e.target.value)
    // console.log(name);
    
  }
  let handlepassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value);
     changepassword(e.target.value)
    //  console.log(password);
     
  }
  return (
    <div className={`${styles.root}`}>
      <label><span>账号:</span> <input type="text" value={name} onChange={handlename} /> </label>
      <label><span>密码: </span> <input type="password" value={password} onChange={handlepassword}/> </label>
      <label><span onClick={loginfunc} className={`${styles.loginbtn}`}>登录</span></label>
    </div>
  );
}
