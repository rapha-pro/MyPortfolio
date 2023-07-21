import React from "react";
import { motion } from 'framer-motion';

const Capacity = ( { title, percentage } ) => {
  return (
    <div className='mt-12 w-full flex flex-col gap-4'>
        <div className='overflow-x-hidden'>
            <p className='text-sm font-medium uppercase'>{title}</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
            <motion.span
            initial = {{x: "-100%", opacity: 0}}
            animate={{x: percentage - 100 + "%", opacity: 1 }}
            transition={{ duration: .5, delay: .5}}
            className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 
            to-red-500 rounded-md relative'
            >
            <span className='absolute -top-7 right-0'>{percentage}%</span>
            </motion.span>
            
        </span>
        </div>
    </div>
  )
};

export default Capacity;
