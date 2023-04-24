// import {} from 'react';

// import * as React from 'react';
import { useLocation } from 'react-router';
import styles from '../styles/Userpage.module.css'
import Mycontext from '../global-context'
import { useContext, useState } from 'react';
export interface IUserProps {
}

export default function User (props: IUserProps) {
  let location=useLocation()
  let {axios}= useContext(Mycontext)
  // console.log(location.state);
  let {username,money}=location.state
  let [mymoney,setmymoney]=useState(money)
  let [showmonyflag,setflag]=useState(false)
  let savemoney=(e:React.ChangeEvent<HTMLInputElement>)=>{
    // console.log('hello savemoney');
    // console.log(e.target.innerText);
    let val=parseFloat(e.target.value)
    //非法数字无效，不改变money数值
    if(val+''!==NaN+'' ){
      setmymoney(val) 
      
    }
   
    
  }
  return (
    <div >
      <p className={`${styles.title}`}>一个由wts开发的基于React+TS的web应用</p>
      
      <p className={`${styles.name}`}>账户：{username}</p>
      <div className={`${styles.money}`} >余额：{showmonyflag?<input type="text"  onChange={savemoney}  onBlur={()=>{setflag(false)}}/>:<span onClick={()=>{setflag(true)}}>{mymoney}</span>}</div>
      <button onClick={()=>{
        axios.post('/user/changemoney',{username,money:mymoney})
      }}>保存余额到云端</button>
      <p>你可以修改自己的余额，但是请记住修改后的值只能是数字才会生效</p>
      
    </div>
  );
}
