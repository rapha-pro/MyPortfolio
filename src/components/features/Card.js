import React from 'react';
// import { HiArrowRight } from 'react-icons/hi';
import { GoDotFill } from 'react-icons/go';

const Card = ( {title, des, icon, done, lengthy} ) => {
    
    // for cards that when been focused, doesn't show completed nor learning
    const smallTranslateHeight = lengthy ? 4 : 0;
    const upperDivHeight = 10 - smallTranslateHeight * 1.5;
    

    return (
        <div
            className='w-full px-6 xl:px-12 lgl:h-80 h-[28rem] sm:-py-4 md:py-2 mdl:py-10 flex items-center rounded-lg shadow-shadowOne 
            bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b 
            hover:from-black hover:to-[#1e2024] transition-colors duration-100'
        >
            <div className='h-72 overflow-y-hidden'>
                <div className={` h-full flex flex-col gap-10 sm:gap-[2.4rem] mdl:gap-10 translate-y-${upperDivHeight} mdl:translate-y-10
                xs:group-hover:-translate-y-${smallTranslateHeight/2 + 1} md:group-hover:translate-y-2 sm:group-hover:gap-10 mdl:group-hover:gap-5 lgl:group-hover:gap-7 mdl:group-hover:translate-y-2 transition-transform
                duration-500`}>
                    <div className='w-10 h-8 flex flex-col justify-between'>
                        {
                            icon ? <span className={`sm:mb-[${smallTranslateHeight/2}]  text-5xl text-blue-500`}>{icon}</span> :
                            <>
                                <span className='w-full h-[3px] rounded-lg bg-designColor inline-flex'></span>
                                <span className='w-full h-[3px] rounded-lg bg-designColor inline-flex'></span>
                                <span className='w-full h-[3px] rounded-lg bg-designColor inline-flex'></span>
                                <span className='w-full h-[3px] rounded-lg bg-designColor inline-flex'></span>
                            </>
                        }   
                        
                    </div>
                    <div className='flex flex-col gap-2 mdl:gap-6'>
                        <h2 className="text-xl xl:text-2xl font-titleFont font-bold text-gray-300">
                            {title}
                        </h2>
                        <p className={`pb-12 group-hover:pb-2 mdl:group-hover:pb-0 mdl:pb-0`}>{des}</p>
                        { 
                            done ? 
                            <p className={`flex gap-8 text-gray-700  sm:group-hover:translate-y-${4-smallTranslateHeight} xl:translate-y-0 duration-300`}><span className='text-2xl text-green-900'><GoDotFill  /></span>
                            Completed some projects</p>:
                            lengthy ?
                                <p className={`flex capitalize gap-4 text-gray-700 -mt-4 mdl:-mt-0 sm:group-hover:-translate-y-4 lgl:-translate-y-2 duration-300`}><span className='text-2xl text-designColor'><GoDotFill  /></span>
                                learning..</p>
                                :
                                <p className={`flex capitalize gap-4 text-gray-700 -pt-6 sm:group-hover:-translate-y-${8-smallTranslateHeight} lgl:-translate-y-2 duration-300`}><span className='text-2xl text-designColor'><GoDotFill  /></span>
                                learning..</p>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;