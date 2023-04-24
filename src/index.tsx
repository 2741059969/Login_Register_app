import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import MyContext from './global-context'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//打包时后端服务器运行地址在自己的云服务器8080端口，设置前端请求地址
// axios.defaults.baseURL="http://116.205.131.223:8080"
//本地开发时
axios.defaults.baseURL="http://localhost:8080"
root.render(
  <React.StrictMode>
    <Router>
    <MyContext.Provider value={{axios,num:10,islogin:false}}>
    <App />
    </MyContext.Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
