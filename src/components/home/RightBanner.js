import React from 'react';
import {bannerImg} from '../../assets/index';

export default function RightBanner() {
  return (
    <div className='w-full lgl:w-1/2  lgl:-mt-48 xl:-mt-0 flex justify-center items-center relative'>
        <img 
        className='w-[300px] h-[370px] sm:h-[410px]  md:w-[350px] md:h-[450px] lgl:w-[460px] mdl:w-[370px] mdl:h-[500px] lgl:h-[560px] xl:w-[500px] xl:h-[680px] z-10' 
            src={bannerImg}
            alt="bannerImg"
        />
        <div 
            className='absolute bottom-0 w-[350px] h-[300px] sm:w-[440px] sml:h-[380px] md:w-[500px] md:h-[425px] mdl:w-[600px] mdl:h-[500px] lgl:w-[450px] bg-gradient-to-r 
            from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'
        >
        </div>
    </div>
  );
}
