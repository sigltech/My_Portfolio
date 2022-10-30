import React from 'react'
import 'animate.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ menuOpen, setMenuOpen }) {
  const navigate = useNavigate();
  const handleMenuOpen = (e) => {
    setMenuOpen(!menuOpen)
    e.target.classList.toggle('burger-open')
  }

  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <h1 onClick={() => navigate('/')} className='nav-title'>Richard Sigl</h1>
        <div className='nav-links animate__animated animate__slideInRight'>
          <a href='/#richardsigl'>Home</a>
          <a href='/#aboutmyjourney'>About</a>
          <a href='/#mycodingprojects'>Projects</a>
          <p
            onClick={() => navigate('/bugtracker-project')}
          >bug Tracker</p>
          <a href='/#smaller-projects'>Challenges</a>
          <a href='/#blog-page'>Blog</a>
          <a href='/#contactme'>Contact</a>
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
