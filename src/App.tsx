import React, { useContext, useEffect } from 'react';
import './App.css'
// import Routeview from './route/routepage';
// import Login from './components/Login';
import Routeview from './route/routepage';
// import MyContext from './global-context'
// import Home from './pages/Home';
// import axios from 'axios'
function App() {
  //结构取出context上的axios
  // let {axios}=useContext(MyContext)
  // console.log(contextdata);
  // console.log('打印数',num);
  
  

  return (
    <div className="App">
      
     <Routeview></Routeview>
    </div>
  );
}

export default App;
