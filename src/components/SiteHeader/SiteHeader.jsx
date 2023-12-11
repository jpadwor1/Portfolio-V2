import React from 'react';
import './SiteHeader.css';
import { motion } from 'framer-motion';

function SiteHeader() {
  const container = {
    hidden: { opacity: 0, y: '0.25em' },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: '0.5em', scale: 1.05 },
    show: { opacity: 1, y: 0, scale: 1 },
    transition: {
      type: 'spring',
      duration: 1,
    },
  };

  return (
    <section className='title-section'>
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='title'
      >
        <motion.h1 variants={item} className='title-heading'>
          Hi, my name is
        </motion.h1>
        <motion.h2 variants={item} className='title-subheading'>
          John Padworski
        </motion.h2>
        <motion.h3 variants={item} className='title-tagline'>
          From concept to completion
        </motion.h3>
        <motion.h3 variants={item} className='title-tagline'>
          I bring ideas to life
        </motion.h3>
        <motion.p variants={item} className='title-body'>
          I'm passionate about creating complex applications, especially premium
          tech tools for veterans, providing them advanced solutions free of
          monthly fees.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default SiteHeader;
