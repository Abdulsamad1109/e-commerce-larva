import React from 'react'
import '../App.css';
import myLogo from '../Images/myLogo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{backgroundColor:"#F5F5F5"}} className=' d-flex h-50 justify-content-evenly align-items-center'>
      <span> <img className='logo' src={myLogo} alt='logo'/> </span>
      <button> <Link to= '/sell' >Sell on eShop</Link> </button>
      <input className='w-25 rounded'/>
      <button><span className='search-btn'>Search</span></button>
      <button><Link to= '/login' >Log in</Link> </button>
      <button><Link to = '/signup'>Sign up</Link></button>
      <button><Link to = '/mycart'>My cart</Link></button>
    </div>
  )
}

export default Header
