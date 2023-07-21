import React from "react";
import { testimonialOne, testimonialTwo, quote, male, female } from "../../assets/index";
import { RiStarFill } from 'react-icons/ri';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

const LeftCard = ({ imageSrc, name, username, title }) => {
  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradien-to-r from-[#1e2024] to-[#23272b] rounded-md 
     flex flex-col md:flex-row lgl:flex-col gap-8 p-8 justify-center md:justify-start lgl:justify-center shadow-shadowOne'
     >
        <img  
            className=' h-64 md:h-32 lgl:h-64 rounded-lg object-cover'
            src={imageSrc}
            alt='testimonial'
        />
        <div>
            <p className='text-xs uppercase text-designColor tracking-wide mb-2'>{username}</p>
            <h3 className='text-2xl font-bold mb-1'>{name}</h3>
            <p className='text-base tracking-wide text-gray-500'>{title}</p>
        </div>
    </div> 
  )
};

export default LeftCard;
