import React from "react";
import { motion } from 'framer-motion'
import ResumeCard from "./ResumeCard";
import ResumeBlankCard from "./ResumeBlankCard";
import ResumeTitles from "./ResumeTitles";

function Experience () {
  return (
    <motion.div 
        initial = {{opacity:0, translateY: 70}}
        whileInView = {{opacity:1, transition:{duration:.9}, translateY: 0}}
        className='w-full grid grid-cols-1 lgl:grid-cols-2  gap-10 lgl:gap-20 items-center'>
        <div>
            <ResumeTitles 
                headingText={"Job Experience"}
                des={"features"}
            />  
            
            <div className='mt-6 lgl:mt-14 w-full sm:h-[1100] md:h-[880px] border-l-[6px] border-l-black 
            border-opacity-30 flex flex-col gap-10'>
       
                <div className="w-full h-1/2 group flex mt-10">
                    <div className='w-10 h-[6px] bgOpacity mt-24 relative'>
                        <span
                            className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex
                            justify-center items-center bg-black bg-opacity-60 group'
                        >
                            <span
                                className='w-3 h-3 rounded-full bg-bodyColor inline-flex 
                                group-hover:bg-designColor duration-300'
                            >
                            </span>
                        </span>
                    </div>
                    
                    <div
                        className='w-full bg-black bg-opacity-20 duration-300 flex flex-col justify-center 
                        rounded-lg p-4 lgl:px-10 gap-6 lgl:gap-5 shadow-shadowOne'
                    >
                        <h3 className='text-xl md:text-2xl font-semibold group-hover:text-white duration-300'>Internship ~2024</h3>
                        <div className='flex flex-col gap-2 text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300'>
                            <p className=''>
                                As an ambitious second-year Computer Science student, 
                                I am actively seeking a software internship by to further enhance my skills and contribute to 
                                innovative projects.
                            </p>

                            <p>Working in projects in languages such as Python, Javascript, React.js, and other frameworks and libraries, showcases
                                my dedication to learning and advancing my skills in different Technologies. Continuously expanding my knowledge,
                                I am actively working to broaden my expertise in the tech field. 
                            </p>

                            <p>With a passion for AI and  mathematics, 
                                I am driven to tackle complex challenges and develop softwares of great use. I am committed to working
                                diligently on projects and ready to embark on a rewarding internship opportunity in the software industry.
                            </p>
                        </div>
                    </div>
                </div>                     



            </div>
        </div>




        <div className='-mt-14'>
            <ResumeTitles 
                headingText={"Other Experience"}
                des={"features"}
            /> 
            <div className='mt-6 lgl:mt-14 w-full h-[850px] border-l-[6px] border-l-black 
            border-opacity-30 flex flex-col gap-10'>
       
                <div className="w-full h-1/2 group flex mt-32">
                    <div className='w-10 h-[6px] bgOpacity mt-16 xl:mt-32 relative'>
                        <span
                            className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex
                            justify-center items-center bg-black bg-opacity-60 group'
                        >
                            <span
                                className='w-3 h-3 rounded-full bg-bodyColor inline-flex 
                                group-hover:bg-designColor duration-300'
                            >
                            </span>
                        </span>
                    </div>
                    
                    <div
                        className='w-full bg-black bg-opacity-20 duration-300 flex flex-col justify-center 
                        rounded-lg p-4 lgl:px-10 gap-6 lgl:gap-5 shadow-shadowOne xl:mt-0'
                    >
                        <div className='flex flex-col lgl:flex-row justify-between lgl:items-center gap-4 p-2 lgl:gap-0'>
                            <div>
                                <h3 className='text-xl md:text-2xl font-semibold group-hover:text-white duration-300'>McDonald's</h3>
                                <p className='text-sm md:text-base mt-2 text-gray-400 group-hover:text-white duration-300'>Ottawa, ON</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300'>
                            <p className=''>
                                Working in Customer Service, have made me hone my skills by working with a diverse group
                                of people and handling challenging situations with grace and professionalism.
                            </p>

                        </div>
                    </div>
                </div>                     
                
            </div>
        </div>

        
    </motion.div>
  )
};

export default Experience;
