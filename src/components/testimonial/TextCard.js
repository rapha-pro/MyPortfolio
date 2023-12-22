import React, { useState } from "react";
import Slider from "react-slick";
import { quote, male, female } from "../../assets/index";
import { RiStarFill } from 'react-icons/ri';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

const TextCard = ( { ReviewTitle, subTitle, numberOfStars, description }) => {

    const StarIcon = () => <RiStarFill />; // You can use any React icon component here

    const Stars = ({ count }) => {
    return (
        <div className='text-yellow-500 flex gap-1'>
        {Array.from({ length: count }, (_, index) => (
            <StarIcon key={index} />
        ))}
        </div>
    );
    };

  return (
    
    <div className='w-full lgl:w-[60%] h-full flex flex-col justify-between'>
        <img 
            className='w-20 lgl:w-32'
            src={quote}
            alt='quote icon'
        />
        <div
            className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg
            shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8'
        >
            <div className='flex flex-col lgl:flex-row justify-between lgl:items-center border-b-2 border-b-gray-900 py-6 '>
                <div>
                    <h3 className='text-xl text-2xl font-medium tracking-wide'>{ReviewTitle}</h3>
                    <p className='text-base text-gray-400 mmt-3'>{subTitle}</p>
                </div>

                    <Stars count={numberOfStars} />

            </div>

            <p className='text-base text-gray-400 font-medium font-titleFont tracking-wide leading-6'>{description}</p>
        </div>

    </div>
  )
};

export default TextCard;
