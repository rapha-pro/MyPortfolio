import React from "react";
import { motion } from 'framer-motion'
import ResumeCard from "./ResumeCard";
import Capacity from "./Capacity";
import ResumeTitles from "./ResumeTitles";

function Skills () {
 
  return (
    <motion.div 
        initial = {{opacity:0, }}
        animate = {{opacity:1, transition:{duration:.9}}}
        className='w-full grid grid-cols-1 lgl:grid-cols-2 gap-10 lgl:gap-20'>
        <div className='w-full'>
          <ResumeTitles 
                headingText={"languages"}
                des={"technical skills"}
            /> 
            <Capacity  
              title = 'python'
              percentage = {70}
            />
            <Capacity  
              title = 'java'
              percentage = {40}
            />
            <Capacity  
              title = 'javascript'
              percentage = {55}
            />
            <Capacity  
              title = 'sql'
              percentage = {15}
            />
           
        </div>




        <div className='w-full'>
            <ResumeTitles 
                headingText={"Web development"}
                des={"technical skills"}
            /> 
            <div className='w-full'>
              <Capacity  
                title = 'Html and Css'
                percentage = {80}
              />
              <Capacity  
                title = 'React'
                percentage = {50}
              />
              <Capacity  
                title = 'Tailwind'
                percentage = {60}
              />
              <Capacity  
                title = 'Bootstrap'
                percentage = {45}
              />
              <Capacity  
                title = 'Django'
                percentage = {40}
              />
            </div>
        </div>

        <div className=' block'>
            <ResumeTitles 
                headingText={"soft skills"}
                des={"skills"}
            /> 
            <div className='w-full'>
              <Capacity  
                  title = 'english'
                  percentage = {100}
              />
              <Capacity  
                  title = 'french'
                  percentage = {100}
              />
            </div>
        </div>

        
    </motion.div>
  )
};

export default Skills;
