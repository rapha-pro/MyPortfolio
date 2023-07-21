import React from "react";
import { motion } from 'framer-motion'
import ResumeCard from "./ResumeCard";
import ResumeTitles from "./ResumeTitles";

function Achievements () {
  return (
    <motion.div 
        initial = {{opacity:0, translateX: -70}}
        animate = {{opacity:1, transition:{duration:.9}, translateX: 0}}
        className='w-full flex flex-col lgl:flex-row  gap-10 lgl:gap-20 items-center'>
        <div>
            <ResumeTitles
                headingText={"School Achievements"}
                des={"features"}
            /> 
            <div className='mt-6 lgl:mt-14 w-full h-[700px] border-l-[6px] border-l-black 
            border-opacity-30 flex flex-col gap-10'>
                <ResumeCard  
                    title="Bachelor Computer Science in AI/ML"
                    subTitle="Carleton University "
                    result = "11.75/12"
                    des="Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                />
                <ResumeCard  
                    title="Merivale High School"
                    subTitle="Grade 12"
                    result = "11.75/12"
                    des="Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                />
            </div>
        </div>




        <div>
            <ResumeTitles 
                headingText={"other achievements"}
                des={"features"}
            /> 
            <div className='mt-6 lgl:mt-14 w-full h-[700px] border-l-[6px] border-l-black 
            border-opacity-30 flex flex-col gap-10'>
                <ResumeCard  
                    title="Bachelor Computer Science in AI/ML"
                    subTitle="Carleton University "
                    result = "11.75/12"
                    des="Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                />
                <ResumeCard  
                    title="Merivale High School"
                    subTitle="Grade 12"
                    result = "11.75/12"
                    des="Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                />
            </div>
        </div>

        
    </motion.div>
  )
};

export default Achievements;
