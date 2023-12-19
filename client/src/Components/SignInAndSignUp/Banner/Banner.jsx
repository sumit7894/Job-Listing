import React from 'react'
import BANNER from '../../../assests/banner.png'
import './banner.css'
const Banner = () => {
  return (
    <div style={{position:"relative"}}>
      <img src={BANNER}
       style={{width:"40vw"}} 
      className='banner__img' 
      alt='banner'/>
      <p className='banner__title'>Your Personal Job Finder</p>
    </div>
  )
}

export default Banner