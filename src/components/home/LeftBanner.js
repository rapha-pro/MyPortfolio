import {React, useEffect} from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { PerspectiveCamera, RenderTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Cube from '../../cube';
import Social from './Social';
import { motion } from 'framer-motion'


export default function Home() {
  const [text] = useTypewriter ({
      words: ['Software Developer Intern', 'Web developer', 'Future AI/ML Engineer'],
      loop: true,
      typeSpeed: 50,
      deleteSpeed: 25,
      delaySpeed: 2800,
  })

  //const cube = Cube();
  const { cube, scene, camera } = Cube();
  const renderer = new THREE.WebGLRenderer();
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  useEffect(() => {
      const cubeContainer = document.getElementById("cube");
      cubeContainer.appendChild(renderer.domElement);
      renderer.setSize(200, 200);
      animate();
  }, []);
  

  function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update()
      cube.rotation.x += 0.0;
      cube.rotation.y += 0.01;
  }

  return (
        <motion.div 
            initial = {{opacity:0, translateY: -90}}
            whileInView = {{opacity:1, transition:{duration:1.2}, translateY: 0}}
            className='w-full lgl:w-1/2 flex flex-col gap-20 pr-8  xl:pr-0'>
            <div className='flex flex-col gap-5'>
                <h3 class="text-lg text-gray-500 uppercase font-bold ">hello,</h3>
                <h1 className='text-5xl lgl:text-6xl font-bold text-white'>I'm {" "}
                <button data-text="Awesome" class="button">
                    <span class="actual-text">&nbsp;Raphaël&nbsp;</span>
                    <span class="hover-text" aria-hidden="true">&nbsp;Raphaël&nbsp;</span>
                </button>
                </h1>
                <h2 className='text-2xl lg:text-4xl font-bold text-gray-300'>
                    a
                    <span> { text }</span>
                    <Cursor 
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide'>
                I'm a second-year Computer Science student with a focus on Artificial Intelligence. 
                Skilled in Python and web technologies, I love crafting elegant code and creating user-friendly interfaces 
                and web-apps.<br /><span className='leading-10'>Find more about me navigating my website.</span><br  />
                <span className='leading-0'>Feel free to reach out if you'd like to collaborate, hire, or discuss about anything particular.</span>
                </p>
            </div>

          <div className='flex flex-col gap-6 md:flex-row lgl:flex-col xl:flex-row md:gap-[8.5rem]  lgl:gap-10 xl:gap-48'>
       
            <div>
                <h2 className='text-base uppercase font-titleFont mb-4 '>
                    find me on
                </h2>  
                <Social  />
            </div>

              <div>
                  <h2 className='text-base uppercase font-titleFont mb-4 '>
                      best skills in
                  </h2>
                  <div id="cube" className=''>
                      
                  </div>
              </div>
          </div>
      </motion.div>
  );
}
