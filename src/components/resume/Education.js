import React from "react";
import { motion } from 'framer-motion'
import ResumeCard from "./ResumeCard";
import ResumeTitles from "./ResumeTitles";

function Education () {
  return (
    <motion.div 
    initial = {{opacity:0, scale:0.8}}
    animate = {{opacity:1, transition:{duration:.9}, scale: 1}}
    className='w-full flex flex-col lgl:flex-row  gap-10 lgl:gap-20 items-center'>
        <div>
            <ResumeTitles 
                headingText={"Education"}
                des={"2022 - Present"}
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
                headingText={"Courses"}
                des={"2022 - Present"}
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

export default Education;
