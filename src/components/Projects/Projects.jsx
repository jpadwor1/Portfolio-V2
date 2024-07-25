import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import Summar from '../../assets/Images/summar-preview.png';
import TrailHead from '../../assets/Images/trailHead.png';
import AlwaysClean from '../../assets/Images/alwaysclean.png';
import UncrewedWarriors from '../../assets/Images/uncrewedWarriors.png'

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id='Projects' className='project-section'>
      <motion.h2
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s',
        }}
        className='project-heading'
      >
        FEATURED PROJECTS
      </motion.h2>

      <ProjectCard
        className='left'
        ProjectLink='https://uncrewedwarriors.org'
        ProjectRepo=''
        ProjectImage={UncrewedWarriors}
        ProjectTitle='Uncrewed Warrior Foundation'
        ProjectDescription='UncrewedWarriorFoundation.org was created for Uncrewed Warrior Foundation a veteran non-profit organization. The organization needed a way to spread their message first and foremost but also handle donations, their monthly newsletter, and veterans that need their support. We built a full CRM Admin panel to manage all of these aspects with custom components.'
        ProjectTags={['Typescript', 'NextJS', 'Prisma', 'Stripe']}
      />

      <ProjectCard
        className='right'
        ProjectLink='https://summarai.io'
        ProjectRepo='https://github.com/jpadwor1/summar'
        ProjectImage={Summar}
        ProjectTitle='SummerAi.io'
        ProjectDescription='Transform how you interact with documents using AI-powered technology. This innovative platform lets you converse with any PDF, offering a seamless, intelligent experience. For veterans, Summarai.io is complimentary, recognizing their service with free access through ID.ME authentication. Experience the synergy of cutting-edge AI and user-centric design, making document analysis more interactive and insightful than ever.  
            '
        ProjectTags={['Typescript', 'React', 'NextJS', 'OpenAi API']}
      />

      <ProjectCard
        className='left'
        ProjectLink='https://genuine-hamster-b2f8ae.netlify.app/'
        ProjectRepo='https://github.com/jpadwor1/always_clean'
        ProjectImage={AlwaysClean}
        ProjectTitle='Always Clean'
        ProjectDescription='Always Clean Pool Service is custom CRM built for a local pool service company. The application allows the company to manage their customers, schedule services, and track their inventory. The application also allows customers to login and view their service history, make payments, and request services.'
        ProjectTags={['Typescript', 'NextJS', 'Prisma', 'Stripe', 'CronJobs']}
      />
      
    </section>
  );
}

export default Projects;
