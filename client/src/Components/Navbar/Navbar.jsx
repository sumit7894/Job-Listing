import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar__container'>
      <div className='triangle__1'/>
      <div className='triangle__2'/>
      <div className='title'>
        Jobfinder
      </div>
      <div className='nav__buttons'>
        <button className='login__button'>Login</button>
        <button className='register__button'>Register</button>
      </div>
    </div>
  )
}

export default Navbar