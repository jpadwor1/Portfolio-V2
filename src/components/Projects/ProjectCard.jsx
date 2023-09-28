import React from 'react'
import './ProjectCard.css'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '../../assets/Icons/GitHub2.svg'

function ProjectCard(props) {
  return (
    <div className={`project-content-${props.className}`}>
            <a id={`project-image-container-${props.className}`} href={props.ProjectLink} rel="noopener noreferrer" target="_blank">
            <div className={`project-image-container`}>
                <img className={`project-image`} src= {props.ProjectImage} alt={props.ProjectTitle} />
            </div>
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
                        {/* <div className="external-project-link"> */}
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
                        {/* </div> */}
                     {props.ProjectTags.map((tags) => (
                        <li className="project-tag">{tags}</li>
                     ))}

                        
                    </ul>
                </div>       
        </div>
    </div>
  )
}

export default ProjectCard
