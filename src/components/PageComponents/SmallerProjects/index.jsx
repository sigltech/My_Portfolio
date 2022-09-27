import React from 'react'
import { GitHub, Preview } from '@mui/icons-material';

export default function SmallerProjects() {
  return (
    <div className='projectspage-container'>
      <div className='projectspage-content'>
        <h1
          className='projectspage-title'
          id='mycodingprojects'>
          Smaller Projects
        </h1>
        <div className="projects-cards-container">
          <div className="project-card-inner-container">
            <div className="project-cards">
              <div className="project-card">
                <h1>Password generator</h1>
                <p>
                  A simple password generator that allows users to create a password with a length of their choosing. Users can click to copy passwords to clipboard.
                </p>
                <div className="project-card-links">
                  <span className='project-card-technologies'>HTML | CSS | JavaScript</span>
                  <a href="https://github.com/sigltech/Password-generator-app"
                    className="project-card-link"
                    target="_blank"
                    rel="noreferrer">
                    <GitHub />
                    <span >
                      GitHub Repo
                    </span>
                  </a>
                </div>
              </div>
              <div className="project-card">
                <h1>Simple Invoice generator</h1>
                <p>
                  This app allows users to create invoices from predetermined products or services. This is one of the first apps I ever made and I am currently working on a new version.
                </p>
                <div className="project-card-links">
                  <span className='project-card-technologies'>HTML | CSS | Javascript</span>
                  <a href="https://github.com/sigltech/invoice-generator"
                    className="project-card-link"
                    target="_blank"
                    rel="noreferrer">
                    <GitHub />
                    <span >
                      GitHub Repo
                    </span>
                  </a>
                </div>
              </div>
              <div className="project-card">
                <h1>GitHub Repo tracker</h1>
                <p>
                  This app allows users to search for GitHub repos and view information about users' repos. This app uses the GitHub API.
                </p>
                <div className="project-card-links">
                  <span className='project-card-technologies'>React</span>
                  <a href="https://the-concept-crew.netlify.app"
                    className="project-card-link"
                    target="_blank"
                    rel="noreferrer">
                    <GitHub />
                    <span >
                      GitHub Repo
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

