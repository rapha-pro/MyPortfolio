import {React, useEffect, useRef} from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Social from './Social'
import { motion } from 'framer-motion'
import { ABOUT_TEXT } from '../../constants/aboutme';
import createCube from '../../cube';
import ActionButtons from './actionButtons';


export default function Home() {
  const [text] = useTypewriter ({
      words: ['Data Scientist Expert', 'AI/ML Engineer', 'Software Eng. Expert'],
      loop: true,
      typeSpeed: 130,
      deleteSpeed: 80,
      delaySpeed: 3000,
  })

  const cubeCleanupRef = useRef(null);
  
  useEffect(() => {
    const cubeContainer = document.getElementById("cube");
    
    if (cubeContainer) {
      // Create cube and get cleanup function
      const cleanup = createCube(cubeContainer);
      cubeCleanupRef.current = cleanup;
    }
    
    // Cleanup on component unmount
    return () => {
      if (cubeCleanupRef.current) {
        cubeCleanupRef.current();
      }
    };
  }, []);

  return (
        <motion.div 
            initial = {{opacity:0, translateY: -90}}
            whileInView = {{opacity:1, transition:{duration:1.2}, translateY: 0}}
            className='w-full lgl:w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5 '>
                <div className='flex flex-col gap-8 text-center lg:text-start sm:mb-4'>
                    <h3 class="text-lg text-gray-400 uppercase font-bold ">hello,</h3>
                    <h1 className='text-5xl lgl:text-6xl font-bold text-white'>I'm {" "}
                        <button data-text="Awesome" class="button">
                            <span class="actual-text">&nbsp;Raphaël&nbsp;</span>
                            <span class="hover-text" aria-hidden="true">&nbsp;Raphaël&nbsp;</span>
                        </button>
                    </h1>
                    <h2 className='text-2xl lg:text-4xl font-bold text-gray-300'>
                        <span className='text-xl lg:text-3xl italic text-gray-500'>aspiring</span>
                        <span> { text }</span>
                        <Cursor 
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor="#ff014f"
                        />
                    </h2>
                </div>
                <div className='text-base font-bodyFont leading-6 tracking-wide flex flex-col gap-2'>
                    <p> 
                        { ABOUT_TEXT[1] }
                        <span className='font-bold italic'> { ABOUT_TEXT[0] }</span> <br />
                    </p>
                    <p>{ ABOUT_TEXT[2] }</p>
                    <p className='pt-1'> { ABOUT_TEXT[3] } </p>
                    <p> { ABOUT_TEXT[4] } </p>
                    <p className='leading-0'>And feel free to reach out on the <a href="#contact">Contact Section</a>,
                    if you'd like to collaborate, hire, or send an email about anything particular.</p>
                </div>
            </div>

          <div className='flex flex-col gap-16 md:flex-row lgl:flex-row md:gap-[8.5rem]  lgl:gap-10 xl:gap-48 '>
       
            <div className='flex flex-col items-center lg:items-start'>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                    find me on
                </h2>  
                <Social  />
                <ActionButtons />
            </div>

                <div className='flex flex-col items-center lg:items-start lg:-ml-14'>
                    <h2 className='text-base uppercase font-titleFont mb-1 '>
                        best skills in
                    </h2>
                    <div id="cube" className="-ml-4 lg:-ml-14 -mt-1" style={{ width: "200px", height: "200px" }}></div>
                </div>
          </div>
      </motion.div>
  );
}
