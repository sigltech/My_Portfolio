import React from 'react'
import { Projects } from '../../../data/Projects';
import ProjectsCard from '../../ProjectsCard';

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
            {Projects.map((project, index) => {
              return (
                <ProjectsCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  git_repo={project.git_repo}
                  live_demo={project.live_demo}
                />
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
