import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'
import SelfTaughtDevImage from '../../assets/Images/SelfTaughDev.png'

function Projects() {
  return (
    <section className="project-section">
        <h2 className="project-heading">PROJECTS</h2>
        
        <ProjectCard 
            className="right"
            ProjectLink="https://jpadwor1.github.io/selftaughtdev/" 
            ProjectRepo="https://github.com/jpadwor1/Simple-Projects/tree/main/selftaught-static"
            ProjectImage={SelfTaughtDevImage} 
            ProjectTitle="SelfTaughtDev/" 
            ProjectDescription="A website I created to cut through the junk online courses for web development. A simple guide for self-taught developers to find courses from all around the web
            that fit their needs."/> 

        <ProjectCard 
            className="left"
            ProjectLink="https://jpadwor1.github.io/selftaughtdev/" 
            ProjectRepo="https://github.com/jpadwor1/Simple-Projects/tree/main/selftaught-static"
            ProjectImage={SelfTaughtDevImage} 
            ProjectTitle="SelfTaughtDev/" 
            ProjectDescription="A website I created to cut through the junk online courses for web development. A simple guide for self-taught developers to find courses from all around the web
            that fit their needs."/> 
        
    </section>
  )
}

export default Projects
