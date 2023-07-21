import {React, useEffect} from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { OrbitControls, PerspectiveCamera, RenderTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three';
import Cube from '../../cube';
import Social from './Social';


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

  useEffect(() => {
      const cubeContainer = document.getElementById("cube");
      cubeContainer.appendChild(renderer.domElement);
      renderer.setSize(200, 200);
      animate();
  }, []);
  

  function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      cube.rotation.x += 0.0;
      cube.rotation.y += 0.01;
  }

  return (
        <div className='w-full lgl:w-1/2 flex flex-col gap-20 pr-8  xl:pr-0'>
            <div className='flex flex-col gap-5'>
                <h3 class="text-lg text-gray-500 uppercase font-bold ">hello,</h3>
                <h1 className='text-5xl lgl:text-6xl font-bold text-white'>I'm
                    <span className='text-designColor capitalize'> raphaël onana</span>
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
                    lorem ipsum dolor sit amet con et nonum lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet con et nonum lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet con et nonum lorem ipsum dolor sit amet
                    lorem ipsum dolor sit amet con et nonum lorem ipsum dolor sit amet
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
      </div>
  );
}
