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
              percentage = {75}
            />
            <Capacity  
              title = 'java'
              percentage = {40}
            />
            <Capacity  
              title = 'Typescript'
              percentage = {65}
            />
            <Capacity  
              title = 'javascript'
              percentage = {85}
            />
            <Capacity  
              title = 'C'
              percentage = {50}
            />
            <Capacity  
              title = 'C++'
              percentage = {60}
            />
            
           
        </div>




        <div className='w-full'>
            <ResumeTitles 
                headingText={"Web development"}
                des={"technical skills"}
            /> 
            <div className='w-full'>
              <Capacity  
                title = 'Nextjs'
                percentage = {55}
              />
              <Capacity  
                title = 'React'
                percentage = {65}
              />
              <Capacity  
                title = 'Tailwind'
                percentage = {75}
              />
              <Capacity  
                title = 'Html and Css'
                percentage = {75}
              />
              <Capacity  
                title = 'Bootstrap'
                percentage = {80}
              />
              <Capacity  
                title = 'Django'
                percentage = {20}
              />
              <Capacity  
                title = 'MongoDB'
                percentage = {60}
              />
            </div>
        </div>




        <div className="w-full">
          <ResumeTitles 
              headingText={"Technical Tools"}
              des={"technical skills"}
            /> 
          <div className='w-full'>
            <Capacity  
              title = 'Github actions'
              percentage = {80}
            />
              <Capacity  
                title = 'Git/GitHub'
                percentage = {80}
              />
            <Capacity  
              title = 'Linux'
              percentage = {50}
            />
              <Capacity  
                title = 'Jenkins'
                percentage = {40}
              />
            <Capacity  
              title = 'Docker'
              percentage = {30}
            />
            <Capacity  
              title = 'Azure DevOps'
              percentage = {80}
            />
            <Capacity  
              title = 'AWS Cloud Practitioner'
              percentage = {80}
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
                  percentage = {90}
              />
              <Capacity  
                  title = 'french'
                  percentage = {95}
              />
            </div>
        </div>




        
    </motion.div>
  )
};

export default Skills;
