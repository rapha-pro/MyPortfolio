import React from "react";
import { contactImg, mainProfile, contactMe } from '../../assets/index';
import Social from "../home/Social";
import { motion} from 'framer-motion'
import { FaEnvelope } from 'react-icons/fa';
import { mailTo } from "../../constants/aboutme";
import ActionButtons from "../home/actionButtons";

function ContactLeft (props) {
  return (
    <motion.div 
        initial = {{opacity:0, translateY: 25}}
        whileInView = {{opacity:1, transition:{duration:1.2}, translateY: 0}}
        className='w-[20rem] lgl:w-[35%] h-full bg-gradien-to-r from-[#1e2024] to-[#23272b] rounded-md 
        p-4 lgl:p-8 justify-center shadow-shadowOne flex flex-col gap-8 justify-center'
    >
        <img 
            className='w-full object-contain rounded-lg mb-4 transform scale-90'
            src={contactMe}
            alt='contact'
        />
        <div className='flex flex-col gap-4'>
            <h3 className='text-3xl font-bold text-white capitalize font-titleFont'>raphaël onana</h3>
            <p className='text-lg font-normal text-gray-400 font-titleFont'>Software Engineer</p>
            <p className='text-base text-gray-400 tracking-wide'>
                Hi there, I hope you found my website UI friendly and engaging. I will be glad if you can leave a review
                as I am always looking to improve and enhance the site. Again, feel free to reach me out for any inquiries or job proposal.<br />
                <span className='leading-10'>Hope to hear from you soon!</span>

            </p>
            <a href={mailTo} className='text-base text-blue-400 flex items-center gap-2 capitalize'>
                <span className="mt-1"><FaEnvelope /></span>
                <span className="">email</span>
                <span className='text-gray-500 hover:text-gray-400 lowercase italic'>(click to email me)</span>
            </a>
            <p className='text-base text-gray-400 flex items-center gap-2 capitalize'>Location: {" "} <span className='text-lightText capitalize'>Canada</span></p>
        </div>

        <div>
            {/* 
                <h2 className='text-base uppercase font-titleFont mb-4 '>
                    find me on
                </h2>   
            */}
            <ActionButtons pad_y="py-0"/>
        </div>
    </motion.div>
  )
};

export default ContactLeft;
