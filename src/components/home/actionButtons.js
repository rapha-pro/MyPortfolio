import React from "react";
// import { MdVerified } from "react-icons/md";
import { TbRosetteNumber1 } from "react-icons/tb";
import { TbDownload } from "react-icons/tb";
import { mailTo } from "../../constants/aboutme";

const ActionButtons = ({ pad_y='py-10' }) => {
  const downloadCV = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className={`flex ${pad_y} gap-3 font-bodyfont text-gray-100`}>
      <button
        onClick={downloadCV}
        className="flex gap-2 p-3 items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 hover:shadow-amber-500/50"
      >
        <TbDownload className="text-lg" />
        <span className="whitespace-nowrap">Download CV</span>
      </button>

      <a
        href={mailTo}
      >
        
        <button
          className="flex gap-2 p-3 items-center justify-center rounded-lg  bg-designColor hover:bg-red-600 hover:shadow-emerald-600/50"
        >
          <TbRosetteNumber1 className="text-lg mt-0" />
          <span className="whitespace-nowrap">Hire Me</span>
        </button>
      </a>
    </div>
  );
};

export default ActionButtons;
