import React from 'react'
import 'animate.css';

export default function Navbar({menuOpen, setMenuOpen}) {

  const handleMenuOpen = (e) => {
    setMenuOpen(!menuOpen)
    e.target.classList.toggle('burger-open')
  }
  
  return (
    <div className='navbar-container'>
        <nav className='navbar'>
            <h1 className='nav-title'>Richard Sigl</h1>
            <div className='nav-links animate__animated animate__slideInRight'>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/'>Projects</a>
                <a href='/'>Contact</a>
            </div>
            <div 
              onClick={handleMenuOpen}
              className="burger-container"
              id='burger-container'
            >
                {/* <div className="burger"> */}
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                {/* </div> */}
            </div>
        </nav>
    </div>
  )
}
