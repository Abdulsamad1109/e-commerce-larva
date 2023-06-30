import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import {myContext} from '../App'


const Sidebar = () => {

  const mydata = useContext(myContext)
  return (
    <div className='sidebar border border-3 d-flex flex-column gap-3 align-items-start pt-4'>
      <button className=''> <Link to= '/allproduct'> All product </Link> </button>
      <button className=''> <Link to= '/men'> Men's Clothing </Link> </button>
      <button className=''> <Link to= '/jeweleries'> Jeweleries </Link> </button>
      <button className=''> <Link to= '/electronics'> Electronics </Link> </button>
      
    </div>
  )
}

export default Sidebar
