import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const Navigate= useNavigate();
  return (
    <div className='navbar__container'>
      <div className='triangle__1'/>
      <div className='triangle__2'/>
      <div className='title'>
        Jobfinder
      </div>
      <div className='nav__buttons'>
        <button 
        onClick={()=>Navigate('/signin')}
        className='login__button'>Login</button>
        <button
        onClick={()=>Navigate('/register')}
        className='register__button'>Register</button>
      </div>
    </div>
  )
}

export default Navbar