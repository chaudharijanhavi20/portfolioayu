import React from 'react'
import './service.css'
import html from '../../images/html.png'
import css from '../../images/css.png'
import react from '../../images/react.png'
import js from '../../images/js.png'
import tailwind from '../../images/tailwind.png'
import bootstrap from '../../images/bootstrap.png'
import nodejs from '../../images/nodejs.png'
import django from '../../images/django.png'
import php from '../../images/php.png'
import flask from '../../images/flask.png'
import git from '../../images/git.png'
import github from '../../images/github.png'
import cpanel from '../../images/cpanel.png'
import heroku from '../../images/heruko.png'
import python from '../../images/python.png'
import c from '../../images/c.png'
import vercel from '../../images/netlify.png'
import mysql from '../../images/mysql.png'
import post from '../../images/post.png'
import mongodb from '../../images/mongodb.png'
import { motion } from 'framer-motion'

// import { AnimatePresence, motion } from 'framer-motion'
// import { useState } from "react";
export default function Service() {

  return (
    <div className='service' id='service'>
      <h1>My Tech Stack</h1>
      <div className="maingrid">
          <motion.div className="boxes1 box" id='boxes1'
          initial={{y:40,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1}}>
            <img src={html} alt={''}/>
            <img src={css} alt={''}/>
            <img src={js} alt={''}/>
            <img src={react} alt={''}/>
            <img src={tailwind} alt={''}/>
            <img src={bootstrap} alt={''}/>
          </motion.div>
          <motion.div className="boxes2 box" id='boxes2'
          initial={{y:40,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1}}>
          <img src={nodejs} alt={''}/>
            <img src={django} alt={''}/>
            <img src={php} alt={''}/>
            <img src={flask} alt={''}/>
          </motion.div>
          <motion.div className="boxes3 box" id='boxes3'
          initial={{y:40,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1}}>
          <img src={python} alt={''}/>
            <img src={c} alt={''}/>
          </motion.div>
          <motion.div className="boxes4 box" id='boxes4'
          initial={{y:40,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1}}>
          <img src={post} alt={''}/>
            <img src={mongodb} alt={''}/>
            <img src={mysql} alt={''}/>
          </motion.div>
          <motion.div className="boxes5 box" id='boxes5'
          initial={{y:40,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1}}>
            <img src={vercel} alt={''}/>
            <img src={cpanel} alt={''}/>
            <img src={heroku} alt={''}/>
          </motion.div>
          <motion.div className="boxes6 box" id='boxes6'
          initial={{y:40,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1}}>
          <img src={git} alt={''}/>
            <img src={github} alt={''}/>

          </motion.div>
      </div>
    </div>
  )
}
