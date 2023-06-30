import './App.css';
import Filter from './Components/Filter';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Mens from './Components/Men';
import { useEffect, useState } from 'react';
import Sell from './Components/Sell';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import MyCart from './Components/MyCart';
import Error from './Components/Error';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Jeweleries from './Components/Jeweleries';
import Electronics from './Components/Electronics';
import {createContext} from 'react'


export const myContext = createContext(null);





export var test = []

 


function App() {

const [datas,setDatas] = useState([])
  

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((myData)=>setDatas(myData))
  },[])

  

  
  


  return (
    
    <div className="App">




    
     <myContext.Provider value={datas}>
      <Router>
      <Header/>
      <div className='d-flex'>
        <Sidebar/>
        <Routes>
        <Route path='/' />
        <Route path='/sell' element = {<Sell/>} />
          <Route path='/allproduct' element =  {<Filter/>} />
          <Route path='/men' element = {<Mens/>} />
          <Route path='/jeweleries' element = {<Jeweleries/>} />
          <Route path='/electronics' element = {<Electronics/>} />

          <Route path='/login' element = {<LogIn/>} />
          <Route path='/signup' element = {<SignUp/>} />
          <Route path='/mycart' element = {<MyCart/>} />
          <Route path='*' element = {<Error/>} />
          
        </Routes>
        </div>
      </Router>
      </myContext.Provider>
      
      



      {/* <Header/>
      <div className='d-flex justify-content-around align-items mt-3'>
      <Sidebar filterFunction = {display} />
      {show == false ? <Mens/>:<Filter/>}
      </div> */}
    </div>
  );
}

export default App;
