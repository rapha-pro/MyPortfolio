import React from "react";
import { motion } from 'framer-motion'
import ResumeCard from "./ResumeCard";
import ResumeTitles from "./ResumeTitles";

function Achievements () {
  return (
    <motion.div 
        initial = {{opacity:0, translateX: -70}}
        whileInView = {{opacity:1, transition:{duration:.9}, translateX: 0}}
        className='w-full grid grid-cols-1 md:grid-cols-2  gap-10 lgl:gap-20 items-center'>
        <div className="-mt-5">
            <ResumeTitles
                headingText={"Achievements"}
                des={"features"}
            /> 

            <div className='-mt-6 lgl:mt-14 w-full sm:h-[1100px] md:h-[600px] lgl:h-1/2 border-l-[6px] border-l-black 
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
                        rounded-lg p-4 lgl:px-10 gap-6 lgl:gap-2 shadow-shadowOne'
                    >
                        <div className='flex flex-col lgl:flex-row justify-between lgl:items-center gap-4 p-2 lgl:gap-0'>
                            <div>
                                <h3 className='text-xl md:text-2xl font-semibold group-hover:text-white duration-300'>Dean's Honour List Award (2022 - Present)</h3>
                                <p className='text-sm md:text-base mt-2 text-gray-400 group-hover:text-white duration-300 capitalize'>carleton University</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300'>
                            {/* <p className=''>
                                The Dean's Honour List at Carleton University is a recognition given to students who have
                                achieved academic excellence by maintaining a high-grade point average (minimum: 10/12 GPA) during a
                                specific study period.
                            </p> */}
                        </div>

                        <div className='flex flex-col lgl:flex-row justify-between lgl:items-center gap-4 p-2 lgl:gap-0'>
                            <div>
                                <h3 className='text-lg md:text-md font-semibold group-hover:text-white duration-300'>Member of Golden Key Honour Society</h3>
                                {/* <p className='text-sm md:text-base text-gray-400 group-hover:text-white duration-300 capitalize'>carleton University</p> */}
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300 -mt-1'>
                            {/* <p className=''>
                                Golden Key International Honour Society is the world's largest collegiate honor society
                                for graduate and undergraduate students. Members qualify when they are at the top 15% 
                                of their school
                            </p> */}
                        </div>
                    </div>
                </div>                     



            </div>
        </div>



        <div className="mt-5">
            <ResumeTitles 
                headingText={"Activities"}
                des={"features"}
            /> 
            <div className='w-full h-[600px] border-l-[6px] lgl:h-1/2 border-l-black 
            border-opacity-30 flex flex-col gap-8'>
       
                {/* div for the card, for alignement */}
                <div className="w-full h-1/2 group flex mt-28">
                    
                    {/* dash line of the circle */}
                    <div className='w-10 h-[6px] bgOpacity mt-16 xl:mt-20 relative'>
                        
                        {/* circle on middle of line */}
                        <span
                            className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex
                            justify-center items-center bg-black bg-opacity-40 group'
                        >
                            {/* circle inside circle to make it transparent, and have the hover effect that
                            show the red crcle    */}
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
                                <h3 className='text-xl md:text-2xl font-semibold group-hover:text-white duration-300'>Volunteer Mentor ~ 2023</h3>
                                <p className='text-sm md:text-base mt-2 text-gray-400 group-hover:text-white duration-300'>Merivale High School</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300'>
                            <p className=''>
                                Volunteered to mentor a group of grade 12 students with their Software Project. 
                                Provided effective guidance and resources to help them get started with django and help them with their 
                                build their webapp.
                            </p>

                        </div>
                    </div>
                </div>                     
                
            </div>
        </div>

        
    </motion.div>
  )
};

export default Achievements;
