import React from 'react'
import { GitHub, Preview } from '@mui/icons-material';

export default function ProjectsCard(props) {
    return (
        <div className="project-card">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div className="project-card-links">
                <span className='project-card-technologies'>
                    {props.technologies.map((technology, index) => {
                        return (
                            <span className='project-card-technologies' key={index}> | {technology}</span>
                        )
                    })}
                </span>
                <a href={props.git_repo}
                    className="project-card-link"
                    target="_blank"
                    rel="noreferrer">
                    <GitHub />
                    <span >
                        github Repo
                    </span>
                </a>
                {props.live_demo &&
                    <>
                        <a href={props.live_demo}
                            className="project-card-link"
                            target="_blank"
                            rel="noreferrer">
                            <Preview />
                            <span >
                                Live demo
                            </span>
                        </a>
                    </>
                }
            </div>
        </div>
    )
}
