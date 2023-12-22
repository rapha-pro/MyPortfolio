import React from 'react';

export default function Title({title, description}) {
    return (
        <div className='flex flex-col font-titleFont gap-4 mb-14'>
            <h3 
            className='text-sm uppercase font-light text-designColor tracking-wide'
            >
            {title}
            </h3>
            <h1 className='text-4xl md:text-5xl text-gray-300 font-bold capitalize '
            >
            {description}
            </h1>
      </div>
    );

}