import * as React from 'react';
// import Nologin from '../components/Nologin';
// import Login from '../components/Login';
// import Register from '../components/Register';
import styles from '../styles/Home.module.css'
import {Outlet,Link} from 'react-router-dom'
export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  // let [islogin,setlogin]=React.useState(false)
  return (
    <div className={`${styles.root}`}>
  
     
      <nav className={`${styles.lrnav}`}>
        <Link to="/home/login">登录</Link>
        <Link to="/home/register">注册</Link>
      </nav>
      <Outlet />
    </div>
  );
}
