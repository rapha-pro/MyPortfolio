import React from 'react';
import {bannerImg, profile, profile2, profile3} from '../../assets/index';
import Tilt from 'react-vanilla-tilt'
import { motion } from 'framer-motion'

export default function RightBanner() {
  return (
    <motion.div 
      initial = {{opacity:0, translateX: 100}}
      whileInView = {{opacity:1, transition:{duration:1.2}, translateX: 0}}
      className='w-full lgl:w-1/2  lgl:-mt-48 xl:-mt-0 flex justify-center items-center relative flex flex-col gap-6'>
      <Tilt options={{"glare-prerender": true}} style={{backgroundColor: '#212428'}}>
        <div 
            className=' w-auto h-auto sm:w-[420px] sml:h-[480px] md:w-[350px] md:h-[500px] mdl:w-[500px] mdl:h-[710px] lgl:w-[500px] lgl:h-[710px] bg-gradient-to-r 
            from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-md shadow-shadowInner imageCard'
        >
          <div className='imageInterior '>
            <img 
              className='w-full h-full rounded-sm shadowInner' 
              src={profile2}
              alt="bannerImg"
            />
          </div>
        </div>
      </Tilt>
      <p className='text-gray-500 italic capitalize'>High School graduation ~ June 2022</p>
    </motion.div>
  );
}
