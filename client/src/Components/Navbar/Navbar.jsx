import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import ICON from '../../assests/user_icon.png'
import useJobContext from '../../hooks/useJobContext'
const Navbar = () => {
  const {isLoggedIn,setIsLoggedIn} = useJobContext();
  const Navigate= useNavigate();
  return (
    <div className='navbar__container'>
      <div className='triangle__1'/>
      <div className='triangle__2'/>
      <div className='title'>
        Jobfinder
      </div>
      {isLoggedIn ?
      (
      <>
      <div className='navbar__right'>
        <button>Logout</button>
        <>
        <span>Hello! </span>
        <img src={ICON} alt="user"/>
        </>
      </div>
      </>
      ):
      (<div className='nav__buttons'>
        <button 
        onClick={()=>Navigate('/signin')}
        className='login__button'>Login</button>
        <button
        onClick={()=>Navigate('/register')}
        className='register__button'>Register</button>
      </div>)}
    </div>
  )
}

export default Navbar