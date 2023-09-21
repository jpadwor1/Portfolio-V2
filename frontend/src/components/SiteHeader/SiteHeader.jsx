import React from 'react'
import './SiteHeader.css'

function SiteHeader() {
  return (
    <section className="title-section">
        <div className="title">
            <h1 className="title-heading">Hi, my name is</h1>
            <h2 className="title-subheading">John Padworski</h2>
            <h3 className="title-tagline">
                From concept to completion                 
            </h3>
            <h3 className="title-tagline">
                I bring ideas to life
            </h3>
            <p className="title-body">
                I am a software engineer and current student in Computer Science. I have a passion for turning ideas into reality from IoT to complex applications. 
            </p>
        </div>        
    </section>
  )
}

export default SiteHeader
