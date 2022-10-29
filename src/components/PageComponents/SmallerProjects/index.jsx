import React from 'react'
import { CodingChallenges } from '../../../data/CodingChallenges';
import ProjectsCard from '../../ProjectsCard';

export default function SmallerProjects() {
  return (
    <div className='smaller-projects-container'>
      <div className='projectspage-content'>
        <h1
          className='projectspage-title'
          id='smaller-projects'>
          Challenges
        </h1>
      </div>
      <div className="smaller-projects-cards-container">
        <div className="smaller-project-card-inner-container">
          <div className="project-cards">
            {CodingChallenges.map((project, index) => {
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

