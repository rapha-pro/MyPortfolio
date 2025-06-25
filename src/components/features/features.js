import React from 'react';
import { RiComputerFill } from 'react-icons/ri';
import { FaGlobe, FaMobile } from 'react-icons/fa';
import { AiFillAppstore } from 'react-icons/ai';
import Title from '../layouts/Title';
import Card from './Card';
import { motion } from 'framer-motion'

export default function Feature() {
  return (
    <section 
      id='features' 
      className='w-full  py-20 border-b-[1px] border-b-black'
    >
      <Title title="Features" description="Areas of Interest"/>
      <motion.div
        initial = {{opacity:0}}
        whileInView = {{opacity:1, transition:{duration:1.8}}}
        className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-20'
      >
        <Card 
          title="Data Science & AI/ML" 
          des="AI is evolving fast, driving my passion to pursue a career as a Data Scientist and AI/ML Engineer"
          icon={<FaGlobe  />}
          done={false}
          lengthy = {false}
        />
        <Card 
          title="FullStack Development" 
          des="Since creating my first site (English Trivia), I've been driven to learn web dev, which led to this site"
          icon={<RiComputerFill  />}
          done={true}
          lengthy = {true}
        />
        <Card 
          title="App Development" 
          des="I've always been amazed by how code compiles into apps. Since then, I've been passionate 
               about learning and building with versatile technologies"
          icon={<FaMobile />}
          done={false}
          lengthy = {true}
        />
  
      </motion.div>
    </section>
  );
}
