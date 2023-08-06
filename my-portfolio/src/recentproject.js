import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import project1 from './images/sadhan.PNG.jpg'
import project2 from './images/project2.PNG'
import project6 from './images/project1.PNG'
import project7 from './images/project4.PNG'
import project3 from './images/wildlife.jpg'
import project4 from './images/music.jpg'
import project5 from './images/plagarism.jpg'
import react from './images/react.png'
import django from './images/django.png'
import flask from './images/flask.png'
import python from './images/python.png'
import Bootstrap from './images/bootstrap.png'
import SwiperCore, { Autoplay } from 'swiper';
import { motion } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import Projectcards from './component/projectcards/Projectcards';
SwiperCore.use([Autoplay])

export default function Recentproject() {
  return (
    <motion.div className='recent' style={{height:'60%'}} 
>
        <h1 style={{textAlign:'center'}}>My recent projects</h1>
        <Swiper
      spaceBetween={20}
      slidesPerView={4}
      grabCursor={true}
      loop={true}
      autoplay={{ delay: 2500 }}
      breakpoints={{
        // when window width is >= 640px
        0: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        480: {
          slidesPerView: 2,
        },
        786:{
          slidesPerView: 3,
        },
        1000:{
          slidesPerView:4,
        }
      }}
    >
      <SwiperSlide><Projectcards img={project1} linkto={'https://socialreactjs1.herokuapp.com/'} title={'Socialreact'} languages={[react]}/></SwiperSlide>
      <SwiperSlide><Projectcards img={project2} linkto={'https://pipeweb1.herokuapp.com/'} title={'Pipeweb'} languages={[django,python,Bootstrap]}/></SwiperSlide>
      <SwiperSlide><Projectcards img={project3} linkto={'https://gdscevent.herokuapp.com/'} title={'Api Paying System'} languages={[django]}/></SwiperSlide>
      <SwiperSlide><Projectcards img={project4} linkto={'https://github.com/ayusshh19/icecream'} title={'Ice cream'} languages={[django,Bootstrap]}/></SwiperSlide>
      <SwiperSlide><Projectcards img={project5} linkto={'https://github.com/ayusshh19/webfriends'} title={'Friends Matching'} languages={[python,flask,Bootstrap]}/></SwiperSlide>
      <SwiperSlide><Projectcards img={project6} linkto={'https://github.com/ayusshh19/webfriends'} title={'Friends Matching'} languages={[python,flask,Bootstrap]}/></SwiperSlide>
      <SwiperSlide><Projectcards img={project7} linkto={'https://github.com/ayusshh19/webfriends'} title={'Friends Matching'} languages={[python,flask,Bootstrap]}/></SwiperSlide>
    </Swiper>
    <div className='viewall' style={{textAlign:'center',margin:'1rem',fontWeight:'bold',textDecoration:'none',color:'black'}}>
        <Link to={'/projects'}>View More <ArrowForwardIcon /></Link>
    </div>
    </motion.div>
  )
}
