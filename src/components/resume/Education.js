import React from "react";
import { motion } from 'framer-motion'
import ResumeCard from "./ResumeCard";
import ResumeBlankCard from "./ResumeBlankCard";
import ResumeTitles from "./ResumeTitles";
import { carleton } from "../../assets/index";

function Education () {
    const firstYearCourses = {
        "Intro to Computer Science I": ["Python", "A+"],
        "Intro to Computer Science II": ["Java", "A+"],
        "Discrete Maths I": ["", "A"],
        "Calculus I & II": ["", "A+"],
        "Stats & Modelling I & II": ["Sass", "A+"]

    }

    const secondYearCourses = {
        "Systems Programming": ["C", "A+"],
        "Abstract Data Types and Algorithms": ["Java", "A+"],
        "Web Development & Databases": ["Nodejs, Expressjs, MongoDB", "A+"],
        "Intro to Software Engineering": ["C++", ""],
        "Discrete Maths II": ["", ""]

    }

  return (
    <motion.div 
    initial = {{opacity:0, scale:0.9}}
    animate = {{opacity:1, transition:{duration:.7}, scale: 1}}
    className='w-full flex flex-col lgl:flex-row  gap-10 lgl:gap-40 items-center'>
        <div className='w-full'>
            <ResumeTitles 
                headingText={"Education"}
                des={"2022 - Present"}
            />
            <div className='mt-6 lgl:mt-14 w-full lgl:h-[1300px] xl:h-[1000px] border-l-[6px] border-l-h-[2px] border-l-black 
            border-opacity-30 flex flex-col gap-10'>
                <ResumeCard  
                    title="Bachelor Computer Science in AI/ML"
                    subTitle="Ottawa, ON"
                    result = "11.75/12"
                    des="I'm currently pursing a Bachelor's Degree in Computer Science in
                    the stream of Artificial Intelligence and Machine Learning while Completing my
                    Minor in Maths and Statistics."
                    source={carleton}
                    height="h-1/2"
                />

                <ResumeCard  
                    title="Merivale High School"
                    subTitle="Ontario Secondary School diploma ~ 2022"
                    result = "Ontario Scholar"
                    des="Graduated as an Ontario Scholar and achieved proficiency grades in 
                    courses"
                    height="h-1/3"
                />
               
            </div>
        </div>




        <div className='w-full'>
        <ResumeTitles 
                headingText={"Courses"}
                des={"2022 - Present"}
            />
            <div className='mt-6 lgl:mt-14 w-full lgl:h-[1300px] xl:h-[1000px] border-l-[6px] border-l-black 
            border-opacity-30 flex flex-col gap-10'>
                <ResumeBlankCard 
                    title="year i" 
                    coursesList={firstYearCourses}
                />

                <ResumeBlankCard 
                    title="Second year" 
                    coursesList={secondYearCourses}
                />

            </div>
        </div>

        
    </motion.div>
  )
};

export default Education;
