import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-[#7B8DEA] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} 
            className='w-22 h-22 object-contain'/>
          <h3 className='text-black text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Us</h2>
      </motion.dev>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[29px] font-medium max-w-3xl leading-[30px]'
      >
        Using our platform, both medical professionals and patients can easily manage their records.   

      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
// export default About