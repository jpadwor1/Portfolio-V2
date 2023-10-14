import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import SelfTaughtDevImage from "../../assets/Images/SelfTaughDev.png";
import Hydroponics from "../../assets/Images/Hydroponics.png";
import TrailHead from "../../assets/Images/trailHead.png";
function Projects() {
  return (
    <section id="Projects" className="project-section">
      <h2 className="project-heading">FEATURED PROJECTS</h2>

      <ProjectCard
        className="right"
        ProjectLink="https://spectacular-gingersnap-720705.netlify.app"
        ProjectRepo="https://github.com/jpadwor1/TrailHead-App"
        ProjectImage={TrailHead}
        ProjectTitle="TrailHead.io"
        ProjectDescription="TrailHead is a platform designed to help outdoor enthusiasts discover and explore trails for various activities such as hiking, mountain biking, running, and more. The website provides detailed information about trails, including reviews, ratings, and user experiences, allowing users to pick the right trail for their adventure."
        ProjectTags={["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "REST API"]}
      />

      <ProjectCard
        className="left"
        ProjectLink="https://www.instructables.com/Cylindrical-Aeroponics-Growth-System/"
        ProjectRepo="https://github.com/jpadwor1/Simple-Projects/tree/main/selftaught-static"
        ProjectImage={Hydroponics}
        ProjectTitle="Hydroponics Growth System"
        ProjectDescription="As a contestant in the 'Growing Beyond Earth' competition in partnership with NASA and Fairchild Tropical Botonical Garden. I designed and built a cylindrical system using basic electrical components controlled with C++. I was 2nd place overall and winner of the collegiate division. 
            "
        ProjectTags={["C++", "Arduino IDE", "HTML", "CSS"]}
      />

      <ProjectCard
        className="right"
        ProjectLink="https://jpadwor1.github.io/selftaughtdev/"
        ProjectRepo="https://github.com/jpadwor1/Simple-Projects/tree/main/selftaught-static"
        ProjectImage={SelfTaughtDevImage}
        ProjectTitle="SelfTaughtDev/"
        ProjectDescription="A website I created to cut through the junk online courses for web development. A simple guide for self-taught developers to find courses from all around the web
            that fit their needs."
        ProjectTags={["HTML", "CSS", "BootStrap", "Javascript"]}
      />
    </section>
  );
}

export default Projects;
