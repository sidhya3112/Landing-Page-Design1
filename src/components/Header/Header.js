import React from 'react'
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
  return (
    <>
    <header className='header'>
      <div>
        <img className='logo' src={logo} alt="logo" />
      </div>

    <nav>
      <ul className='navComponents'>
        <li><button className='navButtons'>Home</button></li>
        <li><button className='navButtons'>Services</button></li>
        <li><button className='navButtons'>Pricing</button></li>
        <li><button className='navButtons'>Testimonials</button></li>
        <li><button className='navButtons'>Blog</button></li>
        <li><button className='trialButton'>Free Trial</button></li>
      </ul>
    </nav>
    </header>
    
    </>
  )
}

export default Header