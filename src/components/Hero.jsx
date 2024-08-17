import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      
      {/* it contains the hero text descripiton about myself */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* the circle to the left of Hi */}
          <div className="w-5 h-5 rounded-full bg-[#0e4fc0]"/>
          {/* the gradient line under the circle */}
          <div className="w-1 sm:h-80 h-40 blue-gradient"/>
        </div >
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi,I'm <span className='text-[#23e88c]'>Rohan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> I am a
          <span style={{ color: '#915eff' }}>
          <Typewriter className="text"
              words={[' <Software Engineer/>..', ' <Web Developer/>..', ' <React Developer/>..', ' <Frontend-Developer../>']}
              cursorColor='#23e88c'
              loop
              cursor
              cursorStyle='|'
              typeSpeed={20}
              deleteSpeed={20}
              delaySpeed={1000}
            />
            </span>
          
            <br/> Welcome to my 3D Portfolio Website..</p>
        </div>
      </div>

{/* 3d computer canvas */}
      <ComputersCanvas/>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        {/* link when clicked directs you from hero to about section */}
        <a href="#about">

{/* scroll cylilnder */}
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-blue-900  flex justify-center items-start p-2'>

            {/* verticle moving ball inside scroll cylinder */}
            <motion.div animate={{
              y:[0,24,0]}}
              transition={{
                duration:1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-blue-400 mb-1"
            />
          </div>
        </a>
      </div>
    </section>

  )
}

export default Hero