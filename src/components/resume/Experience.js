import React from "react";
import { motion } from 'framer-motion'
import ResumeCard from "./ResumeCard";
import ResumeBlankCard from "./ResumeBlankCard";
import ResumeTitles from "./ResumeTitles";
import { ford } from "../../assets/index";

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
            
            <div className='mt-6 lgl:mt-14 w-full sm:h-[1400] md:h-[1450px] border-l-[6px] border-l-black 
            border-opacity-30 flex flex-col gap-6'>
       
                    
                    <ResumeCard  
                        title="Software Designer"
                        subTitle="Montreal, Quebec"
                        des=
                        <ul className="flex flex-col gap-4">
                            <li>
                                Leading the migration of CI/CD pipelines from Azure DevOps Server Pipelines to GitHub Actions by creating a detailed
                                migration plan to support the company's transition to GitHub Enterprise
                            </li>
                            <li>
                                Integrated the GitHub Actions Importer into existing workflows, achieving up to 80% accuracy in pipeline translation
                            </li>
                            <li>
                                Contributing to designing and implementing embedded software for autonomous drilling machine systems, utilizing Linux bash
                                and docker in a scaled Agile team environment.
                            </li>
                        </ul>
                        
                        result="Internship"
                        source={""}
                        height="h-1/2"
                    />

                    
                    <ResumeCard  
                        title="Test Automation Engineer"
                        subTitle="Ottawa, Ontario"
                        des=
                        <ul className="flex flex-col gap-4">
                            <li>
                                Developed a pipeline to streamline logging into nodes, processing device data, and generating JSON files, significantly
                                improving efficiency and saving hours of work
                            </li>
                            <li>
                                Demonstrated leadership by mentoring a new intern, helping acclimate to the team's workflows and tools. 
                                Provided guidance on using automation tools, debugging processes, and effective lab management
                            </li>
                            <li>
                                Gained practical experience with several automotive and electronic hardware such as Sync Infotainment, Telematics
                                hardware, Arduino, while setting up FNV (Fully Networked Vehicles) systems for testing
                            </li>
                        </ul>
                        
                        result="Internship"
                        source={ford}
                        height="h-1/2"
                    />
            </div>
        </div>




        <div className='-mt-14'>
            <ResumeTitles 
                headingText={"Other Experience"}
                des={"features"}
            /> 
            <div className='mt-12 lgl:mt-14 w-full h-[1400px] border-l-[6px] border-l-black 
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
                            
                            <ul className="flex flex-col gap-4">
                                <li>
                                    Demonstrated exceptional customer service by proactively addressing customers' 
                                    needs, and swiftly resolving any concerns to ensure a consistent and high 
                                    customer satisfaction. This dedication resulted in being awarded Employee 
                                    of the Month in July 2023 and subsequent promotion to Crew-Trainer.
                                </li>
                                <li>
                                    Assumed leadership role by providing guidance and sharing efficient working 
                                    techniques to new crew members, facilitating their integration into the team, 
                                    adhering to company standards.
                                </li>
                                <li>
                                    Fostered effective teamwork through continuous communication and 
                                    collaboration with fellow crew members, ensuring the accurate and 
                                    prompt processing of orders.
                                </li>

                            </ul>
                            

                        </div>
                    </div>
                </div>                     
                
            </div>
        </div>

        
    </motion.div>
  )
};

export default Experience;
