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
            <p className='aboutpage-about'>
              I'm a full stack web developer with a passion for creating beautiful, functional websites and applications. After completing my Undergraduate study at Edinburgh university and most recently, my masters at Heriot-Watt University in Accounting and Finance, I felt that I was more 
            </p>
            <p className='aboutpage-about'> 
              I grew up in Singapore with multicultural parents before moving to the UK to undertake my degree in business management at Edinburgh University. I am adaptable, inquisitive  and excited about pursuing a career in tech. I’ve experienced a number of different roles in a company, from supervisory to sales roles never found work to be as enjoyable and interesting as I did when I began to teach myself to code. Development and tech tap into my creative and analytical thinking and allow me to think outside the box. Coding and programming allow me to feel a sense of creation and accomplishment which I never felt in any other role.After teaching my self HTML, CSS and JavaScript at the start of this year, I embarked on a journey to develop my skills further and enter an area of work that I felt more passionate and connected to. I am currently enrolled in a full stack web development course at CodeClan, where I am learning the fundamentals of web development and building a portfolio of projects. I am looking for a full time position as a web developer.

              Outside of work, I love watching formula 1, playing golf, making music and going to the Cinema.  
            </p>
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
