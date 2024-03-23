import React from 'react'
import './checking-about.css'
import { Link } from 'react-router-dom'

const CheckingAbout = () => {
  return (
    <div className='checking-about'>
        <h1 >CHECKOUT OUR LATEST BUILD AND MAKE IT YOUR OWN!
          <Link style={{textDecoration: 'none'}} to='/start-build-page'><button className='checking-about-view-bttn'>
                VIEW OUR LATEST BUILD
            </button></Link>
           
</h1>
      
    </div>
  )
}

export default CheckingAbout
