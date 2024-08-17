import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services, rm } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaFileDownload } from 'react-icons/fa';

const ServiceCard =  ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        {/* this div is the flip card */}
        <div options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>      
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-4 gap-10 items-start">
        {/* Left Portion */}
        <div className="flex flex-col w-full md:w-[60%]">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
          >
            As a passionate and detail-oriented graduate student in Software Engineering at Arizona State University, I thrive on leveraging my robust analytical, problem-solving, and technical skills to drive innovative solutions in software engineering, machine learning, data analysis, and artificial intelligence. With a proven track record of research experience, I have honed my expertise in working on various projects like scrum simulator, predictive maintenance models, processing digital fundus images, and deploying deep learning frameworks.
          </motion.p>

          {/* link to download my resume */}
          <div className="flex justify-center mt-6">
            <a
              href={rm.cv} // Link to your resume file
              download="Resume_Rohan_Mathur.pdf" // The name the downloaded file will have
              className="flex bg-red-600 text-white font-semibold rounded-full shadow-lg px-6 py-2 w-[170px] h-[50px] justify-center items-center"
            >
              My Resume
              <FaFileDownload className="ml-2" />
            </a>
          </div>

        </div>

        {/* Right Portion */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="glowing-border p-6 shadow-card w-full md:w-[40%] flex flex-col justify-cente"
          style={{ height: '100%' }}
        >
          <div className="text-center">
            <h3 className="text-white text-[20px] font-bold mb-4">Rohan Mathur</h3>

            {/* my photo */}
            {/* <img src="src\assets\rohan.jpg" alt="Your Name" className="circular-image mb-4"/> */}

            <div className="box"> 
              <img src={rm.icon} alt="Your Name" className="boximg"/>
            </div><br />

            {/* Experience and Education Boxes */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Experience Box */}
              <div className="flex-1 glowing-border p-4 rounded-lg">
                <h4 className="text-white text-[18px] font-semibold mb-2">Experience</h4>
                <p className="text-secondary text-[13px]">
                  2+ years <br /> Software Development
                </p>
              </div>

              {/* Education Box */}
              <div className="flex-1 glowing-border p-4 rounded-lg">
                <h4 className="text-white text-[18px] font-semibold mb-2">Education</h4>
                <p className="text-secondary text-[13px]">
                  B.Sc. Computer Engineering <br /> M.Sc. Software Engineering 
                </p>
              </div>
            </div>

            {/* My social media icons */}
            <div className="social-icons mt-6 flex justify-center">
              <a href="https://www.linkedin.com/in/rohan-mathur13" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className='mx-1' style={{ color: '#0077b5', fontSize: '1.5rem' }} />
              </a>
              <a href="https://github.com/rm0929" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className='mx-1' style={{ fontSize: '1.5rem' }} />
              </a>
              <a href="https://www.instagram.com/rohan_mathur13" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className='mx-1'style={{ color: '#E1306C', fontSize: '1.5rem' }} />
              </a>
              <a href="https://wa.me/+18577016673" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp className='mx-1' style={{ color: '#25D366', fontSize: '1.5rem' }} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>


      
    
{/* Servicecard is the card which shows what I am */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index ={index} {...service}/>))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");