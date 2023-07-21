import React from "react";
import { contactImg } from '../../assets/index';
import Social from "../home/Social";

function ContactLeft (props) {
  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradien-to-r from-[#1e2024] to-[#23272b] rounded-md 
        p-4 lgl:p-8 justify-center shadow-shadowOne flex flex-col gap-8 justify-center'
    >
        <img 
            className='w-full h-64 object-cover rounded-lg mb-4'
            src={contactImg}
            alt='contact'
        />
        <div className='flex flex-col gap-4'>
            <h3 className='text-3xl font-bold text-white capitalize'>raphaël onana</h3>
            <p className='text-lg font-normal text-gray-400'>Student Software Developer</p>
            <p className='text-base text-gray-400 tracking-wide'>
            lorem ipsum dolor sit amet, consectetur adipiscing elit
            lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p className='text-base text-gray-400 flex items-center gap-2 capitalize'>phone: <span className='text-lightText'>+1 123 345 678</span></p>
            <p className='text-base text-gray-400 flex items-center gap-2 capitalize'>email: {" "} <span className='text-lightText lowercase'>myemail@mail.com</span></p>
        </div>

        <div>
            <h2 className='text-base uppercase font-titleFont mb-4 '>
                find me on
            </h2>  
            <Social  />
        </div>
    </div>
  )
};

export default ContactLeft;
