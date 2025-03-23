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
          title="Web Development" 
          des="Since the creation of my very first website (English Trivia), i have been driven 
          to learn web dev, which has further led me to building this website"
          icon={<RiComputerFill  />}
          done={true}
          lengthy = {false}
        />
        <Card 
          title="App Development" 
          des="I have always been amazed by how some lines of codes could compile and executed to create an app.
          Since then, i have always had a high interest learning such versatile technologies, and buid one myself"
          icon={<FaMobile />}
          done={false}
          lengthy = {false}
        />
        <Card 
          title="Artificial Intelligence" 
          des="AI is a rapidly growing field is becoming an irreplacable tool in many industries. My passion for 
          AI led me into my current program, where I aspire to learn various technologies to build something impactful"
          icon={<FaGlobe  />}
          done={false}
          lengthy = {true}
        />
  
      </motion.div>
    </section>
  );
}
