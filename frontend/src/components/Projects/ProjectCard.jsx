import React from 'react'
import './ProjectCard.css'
import LinkIcon from '../../assets/Icons/link.png'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '../../assets/Icons/GitHub2.svg'

function ProjectCard(props) {
  return (
    <div className="project-content">
            <a id={`project-image-container-${props.class}`} href={props.ProjectLink} rel="noopener noreferrer" target="_blank">
            <div className={`project-image-container-${props.class}`}></div>
            </a>

            <div className={`project-wrapper-${props.className}`}>    
                <h2 className="project-title">
                    {props.ProjectTitle}
                </h2>
                <div className="project-summary">
                    <p>
                        {props.ProjectDescription}
                    </p>
                    <ul className={`project-tech-${props.className}`}>
                        <li>
                            <a href={props.ProjectRepo} rel="noopener noreferrer" target="_blank">
                                <img src={GitHubIcon} alt="Link"/>
                            </a>
                        </li>
                        <li>
                            <a href={props.ProjectLink} rel="noopener noreferrer" target="_blank">
                                <OpenInNewIcon 
                                    sx={{
                                        color: "#ffbf38",
                                        height: "40px",
                                        width: "40px",
                                        '&:hover': {
                                            opacity: 0.5,
                                        },
                                    }}
                                />
                            </a>
                        </li>
                        <li className='project-tag'>Liquid</li>
                        <li className='project-tag'>CSS</li>
                        <li className='project-tag'>HTML</li>
                    </ul>
                </div>       
        </div>
    </div>
  )
}

export default ProjectCard
