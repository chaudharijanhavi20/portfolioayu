import React, { useState } from 'react'
import './intro.css'
import ayush from '../../images/ayush.png'
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const linkvariant={
  visible:{ transition:{duration:1}
  },
  hover:{
    scale:1.3
  }

}

export default function Intro() {
  const [buttonactive, setbuttonactive] = useState(true)
  return (
    <div className='intro' id='home'>
      <div className='myintro'>
        <h2>
          Hello, I'm
        </h2>
        <h1>
          Ayush Shukla
        </h1>
        <h3>
          Full Stack Developer | Machine Learing 
        </h3>
        <h3>
        I'm a full-stack developer with extensive expertise and some background in machine learning and competitive programming. 
        </h3>
        <div className="introlinks">
          <motion.div variants={linkvariant} animate="visible" whileHover="hover" className="linkitems"><a href="https://github.com/ayusshh19" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a></motion.div>
          <motion.div variants={linkvariant} animate="visible" whileHover="hover"className="linkitems"><a href="https://www.linkedin.com/in/ayushshukla1906/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a></motion.div>
          <motion.div variants={linkvariant} animate="visible" whileHover="hover"className="linkitems"><a href="https://www.instagram.com/ayusshh19/" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a></motion.div>
          <motion.div variants={linkvariant} animate="visible" whileHover="hover"className="linkitems"><a href="https://twitter.com/49ayush19" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a></motion.div>
        </div>
      </div>
      <div id='home' className='container home-container' onClick={() => setbuttonactive(buttonactive ? false : "active")}>
        <div className='logo'>
          <motion.div className={buttonactive ? 'hover-show active' : "hover-show"}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}>
            <span className='circle'></span>
            <span className='circle'></span>
            <span className='circle'></span>
            <span className='circle'></span>
            <span className='circle'></span>
            <span className='circle'></span>
            <span className='circle'></span>
            <span className='circle'></span>
          </motion.div>

          <motion.img src={ayush} initial={{ scale: 1.5 }} animate={{ scale: 1 }} transition={{ duration: 1 }} alt='' />
        </div>
      </div>
    </div>
  )
}
