import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaJava } from 'react-icons/fa';
import { siPython, siHtml5} from 'react-icons/si';

function Social (props) {
  return (
    <div className='flex gap-4'>
        <a rel='noopener noreferrer nofollow' target='_blank' href='https://www.linkedin.com/in/rapha%C3%ABl-onana-280240204/' 
          alt='twitter'
          className='hover:-translate-y-1 duration-300'
      >
            <span className='bannerIcon'>
                <FaFacebookF  />
            </span>
        </a>
        <a rel='noopener noreferrer nofollow' target='_blank' 
          href='https://twitter.com/rapha_pro_' 
          alt='twitter'
          className='hover:-translate-y-1 duration-300'
      >
            <span className='bannerIcon'>
                <FaTwitter  />
            </span>
        </a>
        <a rel='noopener noreferrer nofollow' target='_blank' 
          href='https://www.linkedin.com/in/rapha%C3%ABl-onana-280240204/'
          alt='linkedin'
          className='hover:-translate-y-1 duration-300'
        >
            <span className='bannerIcon'>
                <FaLinkedinIn  />
            </span>
        </a>
    </div>
  )
};

export default Social;
