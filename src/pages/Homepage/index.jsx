import React from 'react'
import './style.css'
import './about.css'
import './projects.css'
import './contact.css'
import { BurgerMenu, AboutPage, ProjectsPage, ContactmePage, SmallerProjects } from '../../components';

export default function Homepage({menuOpen, setMenuOpen}) {

  return (
    <>
      <BurgerMenu 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className='homepage-container'>
          <div className='section1 homepage-content'>
              <div className="left-block">
                  <h1 
                    className='homepage-title'
                    id='richardsigl'>Richard Sigl</h1>
                  <h2>Full Stack Web Developer</h2>
                  <p className='homepage-about'>Hi, I'm Richard. I'm a full stack web developer with a passion for creating beautiful, functional websites and applications. I'm currently looking for a full time position as a web developer.</p>
                  <div className='homepage-buttons'>
                      <a className='homepage-btns' href='#mycodingprojects'>View Projects</a>
                      <a className='homepage-btns' href='#contactme'>Contact Me</a>
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
          <div className="smaller-projects-section">
            <SmallerProjects />
          </div>
          <div className="contactme-section">
            <ContactmePage />
          </div>
      </div>
    </>
  )
}
