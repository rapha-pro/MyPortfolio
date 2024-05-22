import React from "react";
import { FaFacebookF, FaLinkedinIn, FaReact, FaJava } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsGithub } from 'react-icons/bs';
import { siPython, siHtml5} from 'react-icons/si';

function Social (props) {
  return (
    <div className='flex gap-4'>
        <a rel='noopener noreferrer nofollow' target='_blank' href='https://github.com/rapha-pro' 
          alt='twitter'
          className='hover:-translate-y-1 duration-300'
      >
            <span className='socialCard'>
                
                <BsGithub className="bannerIcon"/>
            </span>
        </a>
        <a rel='noopener noreferrer nofollow' target='_blank' 
          href='https://www.linkedin.com/in/raphaelonana/'
          alt='linkedin'
          className='hover:-translate-y-1 duration-300'
        >
            <span className='socialCard'>
                <FaLinkedinIn  className="bannerIcon"/>
            </span>
        </a>
        <a rel='noopener noreferrer nofollow' target='_blank' 
          href='https://twitter.com/rapha_pro_' 
          alt='twitter'
          className='hover:-translate-y-1 duration-300'
      >
            <span className='socialCard'>
                <FaXTwitter className="bannerIcon"/>
            </span>
        </a>
    </div>
  )
};

export default Social;
