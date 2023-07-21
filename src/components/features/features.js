import React from 'react';
import { RiComputerFill } from 'react-icons/ri';
import { FaMobile, FaGlobe } from 'react-icons/fa';
import { AiFillAppstore } from 'react-icons/ai';
import Title from '../layouts/Title';
import Card from './Card';

export default function Feature() {
  return (
    <section 
      id='features' 
      className='w-full  py-20 border-b-[1px] border-b-black'
    >
      <Title title="Features" description="Areas of Interest"/>
      <div
        className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-20'
      >
        <Card 
          title="Web Development" 
          des="lorem ipsum dolor sit amet con et nonum lorem ipsum dolor sit 
          amet nonum lorem ipsum dolor sit amet"
          icon={<RiComputerFill  />}
          done={true}
        />
        <Card 
          title="App Development" 
          des="lorem ipsum dolor sit amet con et nonum lorem ipsum dolor sit 
          amet nonum lorem ipsum dolor sit amet"
          icon={<AiFillAppstore />}
          done={false}
        />
        <Card 
          title="Artificial Intelligence" 
          des="lorem ipsum dolor sit amet con et nonum lorem ipsum dolor sit 
          amet nonum lorem ipsum dolor sit amet"
          icon={<FaGlobe  />}
          done={false}
        />
  
      </div>
    </section>
  );
}
