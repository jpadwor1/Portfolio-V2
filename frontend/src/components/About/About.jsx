import React from 'react'
import './About.css'
import HeadShot from '../../assets/Images/headShot.jpg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function About() {
  return (
    <section className="about-section">
        <h2 id="about" className="about-heading">About Me</h2>
        <div className="about-container">
            <div className="about-description">
              <p className="about-writeup">
              Hello! My name is John Padworski, a military veteran turned software engineer with a passion for code. I'm driven by an insatiable appetite for solving intricate problems and crafting innovative solutions.<br/><br/>

              Over the years, I've had the opportunity to work in diverse roles, from being a Frontend Web Developer at a non-profit "Know a Vet?" to a FinTech Startup and even roles in aviation. Each of these experiences has honed my unique problem-solving approach, which I bring to every project I undertake.<br/><br/>

              Here are a few technologies and areas I've been deeply involved with recently:
              </p>
              <ul className="tech-list">
                <li className="tech-list-item">
                  <KeyboardArrowRightIcon sx={{
                    color: "rgb(255, 178, 56)"
                  }}
                  /> Python</li>
                <li className="tech-list-item"> <KeyboardArrowRightIcon sx={{
                    color: "rgb(255, 178, 56)"
                  }}/> HTML / CSS</li>
                <li className="tech-list-item"> <KeyboardArrowRightIcon sx={{
                    color: "rgb(255, 178, 56)"
                  }}/> React</li>
                <li className="tech-list-item"> <KeyboardArrowRightIcon sx={{
                    color: "rgb(255, 178, 56)"
                  }}/> NodeJS</li>
                <li className="tech-list-item"> <KeyboardArrowRightIcon sx={{
                    color: "rgb(255, 178, 56)"
                  }}/> SQL</li>
                <li className="tech-list-item"> <KeyboardArrowRightIcon sx={{
                    color: "rgb(255, 178, 56)"
                  }}/> NoSQL</li>
              </ul>
            </div>
            <div className="photo">
              <div className="photo-frame"></div>
              <img src={HeadShot} alt="profile" className="about-image" />
            </div>
        </div>
    </section>
  )
}

export default About
