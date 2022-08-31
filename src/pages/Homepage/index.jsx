import React, { useState } from 'react'
import './style.css'
import './about.css'
import './projects.css'
import './contact.css'
import { BurgerMenu, AboutPage, ProjectsPage, ContactmePage } from '../../components';

export default function Homepage({menuOpen, setMenuOpen}) {

  return (
    <>
      <BurgerMenu 
        menuOpen={menuOpen}
      />
      <div className='homepage-container'>
          <div className='section1 homepage-content'>
              <div className="left-block">
                  <h1 className='homepage-title'>Richard Sigl</h1>
                  <h2>Full Stack Web Developer</h2>
                  <p className='homepage-about'>Hi, I'm Richard. I'm a full stack web developer with a passion for creating beautiful, functional websites and applications. I'm currently looking for a full time position as a web developer.</p>
                  <div className='homepage-buttons'>
                      <a className='homepage-btns' href='/'>View Projects</a>
                      <a className='homepage-btns' href='#contact-header'>Contact Me</a>
                  </div>
              </div>
              {/* <div className="right-block">
                
              </div> */}
          </div>

          <div className="about-section">
              <AboutPage />
          </div>
          <div className="projects-section">
            <ProjectsPage />
          </div>
          <div className="contactme-section">
            <ContactmePage />
          </div>
      </div>
    </>
  )
}
