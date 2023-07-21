import React from 'react';
// import { HiArrowRight } from 'react-icons/hi';
import { GoDotFill } from 'react-icons/go';

const Card = ( {title, des, icon, done} ) => {
    return (
        <div
            className='w-full px-6 xl:px-12 h-80 py-10 flex items-center rounded-lg shadow-shadowOne 
            bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b 
            hover:from-black hover:to-[#1e2024] transition-colors duration-100'
        >
            <div className='h-72 overflow-y-hidden'>
                <div className=' h-full flex flex-col gap-10 sm:gap-20 mdl:gap-10 translate-y-10 mdl:translate-y-16
                xs:group-hover:translate-y-0 md:group-hover:translate-y-2 sm:group-hover:gap-10 mdl:group-hover:gap-5 mdl:group-hover:translate-y-7 transition-transform
                duration-500'>
                    <div className='w-10 h-8 flex flex-col justify-between'>
                        {
                            icon ? <span className="text-5xl text-designColor">{icon}</span> :
                            <>
                                <span className='w-full h-[3px] rounded-lg bg-designColor inline-flex'></span>
                                <span className='w-full h-[3px] rounded-lg bg-designColor inline-flex'></span>
                                <span className='w-full h-[3px] rounded-lg bg-designColor inline-flex'></span>
                                <span className='w-full h-[3px] rounded-lg bg-designColor inline-flex'></span>
                            </>
                        }   
                        
                    </div>
                    <div className='flex flex-col gap-3 mdl:gap-6'>
                        <h2 className="text-xl xl:text-2xl font-titleFont font-bold text-gray-300">
                            {title}
                        </h2>
                        <p className='base'>{des}</p>
                        { 
                            done ? 
                            <p className='flex gap-4 text-gray-700 sm:hover:group-translate-y-1 sm:translate-y-8 xl:translate-y-0 duration-300'><span className='text-2xl text-green-900'><GoDotFill  /></span>
                            Completed some projects</p>:
                            <p className='flex capitalize gap-4 text-gray-700 sm:hover:group-translate-y-1 sm:translate-y-8 xl:translate-y-0 duration-300'><span className='text-2xl text-designColor'><GoDotFill  /></span>
                            learning..</p>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;