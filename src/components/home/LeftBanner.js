import {React, useEffect, useRef} from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Social from './Social'
import { motion } from 'framer-motion'
import { ABOUT_TEXT } from '../../constants/aboutme';
import createCube from '../../cube';


export default function Home() {
  const [text] = useTypewriter ({
      words: ['AI/ML Engineer', 'Software Developer', 'Web developer'],
      loop: true,
      typeSpeed: 40,
      deleteSpeed: 20,
      delaySpeed: 1800,
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
            className='w-full lgl:w-1/2 flex flex-col gap-20 pr-8  xl:pr-0 '>
            <div className='flex flex-col gap-5'>
                <h3 class="text-lg text-gray-500 uppercase font-bold ">hello,</h3>
                <h1 className='text-5xl lgl:text-6xl font-bold text-white'>I'm {" "}
                <button data-text="Awesome" class="button">
                    <span class="actual-text">&nbsp;Raphaël&nbsp;</span>
                    <span class="hover-text" aria-hidden="true">&nbsp;Raphaël&nbsp;</span>
                </button>
                </h1>
                <h2 className='text-2xl lg:text-4xl font-bold text-gray-300'>
                    <span className='text-xl lg:text-3xl italic'>aspiring</span>
                    <span> { text }</span>
                    <Cursor 
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
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
            </div>

                <div className='flex flex-col items-center lg:items-start'>
                    <h2 className='text-base uppercase font-titleFont mb-1 '>
                        best skills in
                    </h2>
                    <div id="cube" className="-ml-4 lg:-ml-14" style={{ width: "200px", height: "200px" }}></div>
                </div>
          </div>
      </motion.div>
  );
}
