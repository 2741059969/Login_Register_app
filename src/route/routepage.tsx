// import {lazy} from 'react';
import {Routes,Route} from 'react-router-dom'
// import Header from '../components/Header';
import Login from '../components/Login';
// const Login=lazy(import('../components/Login'))
import Register from '../components/Register';
import Home from '../pages/Home';
import User from '../pages/Userpage';
import { useState } from 'react';

// import {redirect} from 'react-router-dom'
export interface IRouteviewProps {
}

export default function Routeview (props: IRouteviewProps) {
  // let [islogin,setlogin]=useState(false)

  return (
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/user' element={<User />}></Route>
    <Route path='/home' element={<Home />}>
      <Route path='/home/login' element={<Login />}></Route>
      <Route path='/home/register'  element={<Register />}></Route>
    </Route>
    
    
    <Route path='/home'  element={<Home />}></Route>
   </Routes>
  );
}
