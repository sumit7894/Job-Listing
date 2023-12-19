import React, { useEffect, useState } from 'react'
import './authentication.css'
import { useNavigate } from 'react-router-dom';
import useJobContext from '../../../hooks/useJobContext';
const Authentication = ({type}) => {
  const [isChecked,setIsChecked] = useState();
  const [isLoginPage,setIsLoginPage] = useState();
  const {setIsLoggedIn} = useJobContext();
  const Navigate = useNavigate();
  useEffect(()=>{
    type === 'register' ? setIsLoginPage(false):setIsLoginPage(true);
    // eslint-disable-next-line
  },[type])
  const handleCheckboxChange =()=>{
    setIsChecked(!isChecked);
  }
  return (
    <div className='auth__left'>
      <div className='form__container'>
        <label className='form__heading'>
        {isLoginPage ? "Already have an account ?" : "Create an account"}
        </label>
        <p className='form__subtitle'>Your personal job finder is here</p>
        {!isLoginPage && <input type='text' placeholder='Name'/>}
        <input type='Email' placeholder='Email'/>
        {!isLoginPage && <input type='numeric' placeholder='Mobile'/>}
        <input type='password' placeholder='Password'/>
        {!isLoginPage && <div className='form__terms__condition'>
        <input type='checkbox' checked={isChecked}
        onChange={handleCheckboxChange}
        />
        <span className='terms__and__condition'>
        By creating an account, I agree to our terms of use and privacy policy
        </span>
        </div>}
        <button className='form__submit__button'>
        {isLoginPage ? "Sign in":"Create Account"}
        </button>
        <p className='form__footer__link'>
        {isLoginPage ? "Don't have an account ?":"Already have an account ?"}
        <button onClick={()=>Navigate(isLoginPage ? "/register" : "/signin")}>
        {isLoginPage ? "Sign Up":"Sign In"}
        </button>
        </p>
      </div>
    </div>
  )
}

export default Authentication