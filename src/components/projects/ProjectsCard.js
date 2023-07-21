import React from 'react';
import {BsGithub} from 'react-icons/bs';
import {FaGlobe} from 'react-icons/fa';

export default function ProjectsCard( {title, des, src, href} ) {
    return (
        <div
            className='w-full p-4 xl:px-12 h-auto xl:py-10 flex flex-col rounded-lg shadow-shadowOne 
            bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b 
            hover:from-gray-900 hover:gray-900 transition-colors duration-1000'
        >
            <div className="w-full h-[80%] overflow-hidden rounded-lg">
                <img 
                    className='w-full h-60 object-cover rounded-lg group-hover:scale-110 duration-300 cursor-pointer' 
                    src={src} 
                    alt="project"  
                />
            </div>
            <div className='w-full mt-5 flex flex-col gap-6'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-titleFont '>{title}</h3>
                    <div className='flex gap-2'>
                        <a rel='noopener noreferrer nofollow' target='_blank' href={href} alt='twitter'>
                            <span
                                className="text-lg w-10 h-10 rounded-full bg-black inline-flex 
                                justify-center items-center hover:text-designColor duration-300 cursor-pointer"
                            >
                                <BsGithub />
                            </span>
                        </a>
                        <a rel='noopener noreferrer nofollow' target='_blank' href={href} alt='twitter'>
                            <span
                                className="text-lg w-10 h-10 rounded-full bg-black inline-flex 
                                justify-center items-center hover:text-designColor duration-300 cursor-pointer"
                            >
                                <FaGlobe />
                            </span>
                        </a>
                    </div>   
    
                </div>
                <div className='font-bodyFont'>
                    <p
                        className="text-sm tracking-wide hover:text-gray-200 duration-300"
                    >
                        {des}
                    </p>
                </div>

            </div>
            
        </div>
    );
}  