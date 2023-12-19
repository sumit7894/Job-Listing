import React, { useEffect, useState } from 'react'
import './authentication.css'
import { useNavigate } from 'react-router-dom';
const Authentication = ({type}) => {
  const [isChecked,setIsChecked] = useState();
  const [isLogin,setIsLogin] = useState();
  const Navigate = useNavigate();
  useEffect(()=>{
    // eslint-disable-next-line
    type === 'register' ? setIsLogin(false):setIsLogin(true);
  },[type])
  const handleCheckboxChange =()=>{
    setIsChecked(!isChecked);
  }
  console.log("is this login",isLogin);
  console.log("here is the type",type);
  return (
    <div className='auth__left'>
      <div className='form__container'>
        <label className='form__heading'>
        {isLogin ? "Already have an account ?" : "Create an account"}
        </label>
        <p className='form__subtitle'>Your personal job finder is here</p>
        {!isLogin && <input type='text' placeholder='Name'/>}
        <input type='Email' placeholder='Email'/>
        {!isLogin && <input type='numeric' placeholder='Mobile'/>}
        <input type='password' placeholder='Password'/>
        {!isLogin && <div className='form__terms__condition'>
        <input type='checkbox' checked={isChecked}
        onChange={handleCheckboxChange}
        />
        <span className='terms__and__condition'>
        By creating an account, I agree to our terms of use and privacy policy
        </span>
        </div>}
        <button className='form__submit__button'>
        {isLogin ? "Sign in":"Create Account"}
        </button>
        <p className='form__footer__link'>
        {isLogin ? "Don't have an account ?":"Already have an account ?"}
        <button onClick={()=>Navigate(isLogin ? "/register" : "/signin")}>
        {isLogin ? "Sign Up":"Sign In"}
        </button>
        </p>
      </div>
    </div>
  )
}

export default Authentication