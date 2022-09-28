import React from 'react'
// import { Navbar } from '../../components'
import headshot from '../../../assets/images/headshot-no-bckgrnd.svg'

export default function AboutPage() {
  return (
    <>
      {/* <Navbar /> */}
      <div className='aboutpage-container'>
        <div className='aboutpage-content'>
          <div className='aboutpage-left'>
            <h1
              className='aboutpage-title'
              id='aboutmyjourney'>
              About Me
            </h1>
            <img
              className='aboutpage-headshot-mobile'
              id='box'
              src={headshot}
              alt="headshot of Richard Sigl"
              width={'200px'}
            />
            <div className="aboutpage-about-container">
              <div className="inner-about-container">
                <p className='aboutpage-about'>
                  Hi, I'm Richard. I'm a full-stack web developer with experience in React, Node, Express, and SQL. I have recently completed a full-stack bootcamp at FutureProof where I further developed my skills in JavaScript, HTML, CSS, and React.
                </p>
                <p className='aboutpage-about'>
                  I have a passion for creating beautiful, functional websites and applications. I love the challenge of learning new technologies and solving problems. I'm a fast learner and I'm always looking for ways to improve my skills. I am continuously working on new projects to expand my knowledge and experience. Some current projects I'm working on include a full-stack React Learning application for the JEST testing framework, as well as a full-stack bug-tracker application with Auth and CRUD functionality.
                </p>
                <p className='aboutpage-about'>
                  I'm currently looking for a full-time position as a full-stack or front end engineer. I'm based in Edinburgh, but I'm happy to work remotely.
                </p>
              </div>
            </div>
          </div>
          <img
            className='aboutpage-headshot'
            id='box'
            src={headshot}
            alt="headshot of Richard Sigl"
            width={'400px'}
          />
        </div>
      </div>
    </>
  )
}
