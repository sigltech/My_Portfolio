import React from 'react'
import { GitHub, Preview } from '@mui/icons-material';

export default function ProjectsPage() {
  return (
    <div className='projectspage-container'>
      <div className='projectspage-content'>
        <h1
          className='projectspage-title'
          id='mycodingprojects'>
          Projects
        </h1>
      </div>
      <div className="projects-cards-container">
        <div className="project-card-inner-container">
          <div className="project-cards">
            <div className="project-card">
              <h1>To Do App</h1>
              <p>
                A simple to do app that allows users to add, complete, and delete tasks. Users can create an account and login to save their tasks.
              </p>
              <div className="project-card-links">
                <span className='project-card-technologies'>React | Flask</span>
                <a href="https://github.com/sigltech/Done_to_do_app"
                  className="project-card-link"
                  target="_blank"
                  rel="noreferrer">
                  <GitHub />
                  <span >
                    github Repo
                  </span>
                </a>
              </div>
            </div>
            <div className="project-card">
              <h1>Childrens story mashups</h1>
              <p>
                This app allows users to write sentences that will ultimately be mashed up with other users sentences to create a story.
              </p>
              <div className="project-card-links">
                <span className='project-card-technologies'>HTML | CSS | Javascript | Express | Node.js</span>
                <a href="https://fp-story-mashups.netlify.app/"
                  className="project-card-link"
                  target="_blank"
                  rel="noreferrer">
                  <Preview />
                  <span >
                    Live demo
                  </span>
                </a>
              </div>
            </div>
            <div className="project-card">
              <h1>WeSwap | Clothing swap platform</h1>
              <p>
                This app allows users to swap clothing with other users. Users can create an account and login to save their items.
              </p>
              <div className="project-card-links">
                <span className='project-card-technologies'>React | Flask</span>
                <a href="https://the-concept-crew.netlify.app"
                  className="project-card-link"
                  target="_blank"
                  rel="noreferrer">
                  <Preview />
                  <span >
                    Live demo
                  </span>
                </a>
                <p style={{ "color": "red" }}>For best experience, use on mobile</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
