import React from 'react' 
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'; //This is going to allow to the work section to look great
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement // react component that shows vertical timeline for work experience
    contentStyle={{background: '#1d1836', color: '#fff'}}  
    contentArrowStyle={{borderRight: '7px solid #fff' }} 
    date={experience.date} 
    iconStyle={{background: experience.iconBg }}
    icon={ // icon of the work experience
      <div className='flex justify-center h-full items-center w-full'>
        <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain'/>
      </div>
    }
  >
    <div> {/*Written content inside Work Experience section*/}
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3> {/* Work Experience title */} 
      <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>{experience.company_name}</p> {/* company name */}
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'> {/** points related to work done at company */}
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul> 
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>  
        <p className={styles.sectionSubText}>
          What I have done so far
        </p>
        <h2 className={styles.sectionHeadText}>
          Work Experience.
        </h2>
      </motion.div>
      
      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")