import React, { useEffect, useRef } from "react";
import Social from "../home/Social";
import createCube from '../../cube';

function Footer() {

    const cubeCleanupRef = useRef(null);
  
    useEffect(() => {
      const cubeContainer = document.getElementById("cube-footer");
      
      if (cubeContainer) {
        const cleanup = createCube(cubeContainer);
        cubeCleanupRef.current = cleanup;
      }
      
      return () => {
        if (cubeCleanupRef.current) {
          cubeCleanupRef.current();
        }
      };
    }, []);


  return (
    <div className='w-full h-auto py-14'>
        <div className='flex flex-col lgl:flex-row items-center justify-between gap-10 lgl:gap-0 text-center '>
            {/* <img className='md:justify-center md:text-center ml-8 lgl:ml-0' src={mylogo} alt="logo"  /> */}
            <div className='flex flex-col gap-10 justify-center ml-8 lgl:ml-20 '>
                <div className='flex gap-4 items-center '>
                    
                    <div className='flex flex-col gap-1 text-center font-titleFont'>
                        <p className='text-2xl text-blue-600 font-bold'>Raphaël Onana</p>
                        <p className="text-xs text-gray-400 font-bodyFont uppercase italic">Software Engineer</p>
                    </div>

                </div>
                {/* <div><Social  /></div> */}
            </div>
            
            <div id="cube-footer" className="-ml-0 lg:-ml-10" style={{ width: "200px", height: "200px" }}></div>
        </div>
    </div>
  )
};

export default Footer;
