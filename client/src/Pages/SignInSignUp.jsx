import React from 'react'
import Authentication from '../Components/SignInAndSignUp/AuthForm/Authentication'
import Banner from '../Components/SignInAndSignUp/Banner/Banner'

const SignInSignUp = ({type}) => {
  return (
    <div style={{display:"flex",width:"100vw",height:"100vh"}}>
        <Authentication type={type}/>
        <Banner/>
    </div>
  )
}

export default SignInSignUp