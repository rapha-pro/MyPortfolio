import React from "react";
import { contactImg } from '../../assets/index';
import Social from "../home/Social";
import { motion} from 'framer-motion'

function ContactLeft (props) {
  return (
    <motion.div 
        initial = {{opacity:0, translateY: 90}}
        whileInView = {{opacity:1, transition:{duration:1.2}, translateY: 0}}
        className='w-full lgl:w-[35%] h-full bg-gradien-to-r from-[#1e2024] to-[#23272b] rounded-md 
        p-4 lgl:p-8 justify-center shadow-shadowOne flex flex-col gap-8 justify-center'
    >
        <img 
            className='w-full h-64 object-cover rounded-lg mb-4'
            src={contactImg}
            alt='contact'
        />
        <div className='flex flex-col gap-4'>
            <h3 className='text-3xl font-bold text-white capitalize font-titleFont'>raphaël onana</h3>
            <p className='text-lg font-normal text-gray-400 font-titleFont'>Student Software Developer</p>
            <p className='text-base text-gray-400 tracking-wide'>
                Hi there, I hope you found this website UI friendly and quite interesting. I will be glad if you can leave a review
                as I am constantly looking to upgrade this website to the best. Again, feel free to reach me out for any inquiries or job proposition.<br />
                <span className='leading-10'>Hope to hear from you soon!</span>

            </p>
            <p className='text-base text-gray-400 flex items-center gap-2 capitalize'>phone: <span className='text-lightText'>+1 613 920 5228</span></p>
            <p className='text-base text-gray-400 flex items-center gap-2 capitalize'>email: {" "} <span className='text-lightText lowercase'>onanaraphaelnathan@gmail.com</span></p>
            <p className='text-base text-gray-400 flex items-center gap-2 capitalize'>Location: {" "} <span className='text-lightText capitalize'>Ottawa, Canada</span></p>
        </div>

        <div>
            <h2 className='text-base uppercase font-titleFont mb-4 '>
                find me on
            </h2>  
            <Social  />
        </div>
    </motion.div>
  )
};

export default ContactLeft;
