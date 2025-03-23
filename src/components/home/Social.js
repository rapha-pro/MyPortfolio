import React from "react";
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsGithub } from 'react-icons/bs';

function Social () {
  return (
    <div className='flex gap-4'>
		<SocialIcon
			href="https://github.com/rapha-pro"
			iconName="Github"
			icon={BsGithub}
			iconClass="hover:text-gray-600"
		/>
		<SocialIcon
			href="https://www.facebook.com/raphaelonana/"
			iconName="LinkedIn"
			icon={FaLinkedinIn}
			iconClass="hover:text-blue-600"
		/>
		<SocialIcon
			href="https://twitter.com/rapha_pro_"
			iconName="Twitter"
			icon={FaXTwitter}
			iconClass="hover:text-designColor"
		/>
    </div>
  )
};

const SocialIcon = ({ href, icon: Icon, iconClass, iconName }) => {
  return (
    <a
      rel="noopener noreferrer nofollow"
	  alt={`Link to Raphael's ${iconName}`}
      target="_blank"
      href={href}
      className="hover:-translate-y-1 duration-300"
    >
      <span className="socialCard">
        <Icon className={`bannerIcon ${iconClass}`} />
      </span>
    </a>
  );
};

export default Social;
