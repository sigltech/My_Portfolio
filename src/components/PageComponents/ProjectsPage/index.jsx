import React from 'react'
import urlShortener from '../../../assets/images/url_shortener_chrome_extension.png'

export default function ProjectsPage() {
  return (
    <div className='projectspage-container'>
      <div className='projectspage-content'>
        <h1 className='projectspage-title' id='projects-header'>Projects</h1>
        <div className="card-container">
          <div className="project-container">
            <div className="project-info">
              <h2 className="project-title">URL Shortener</h2>
              <p className="project-description">
                A Chrome extension that allows users to shorten their long URLs.
              </p>
            </div>
            <div className="project-image">
              <img 
                src={urlShortener}
                alt="url shortener project screenshot" 
                width={'300px'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
