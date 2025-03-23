import React, { useEffect } from "react";
import { mylogo } from "../../assets/index";
import Social from "../home/Social";
import Cube from "../../cube";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as THREE from 'three';

function Footer() {
//const cube = Cube();
  const { cube, scene, camera } = Cube();
  const renderer = new THREE.WebGLRenderer();
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

  useEffect(() => {
      const cubeContainer = document.getElementById("cube-2");
      cubeContainer.appendChild(renderer.domElement);
      renderer.setSize(300, 300);
      animate();
  }, []);
  

  function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
     
      cube.rotation.x += 0.0;
      cube.rotation.y += 0.01;
  }


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
                <div><Social  /></div>
            </div>
            
            <div id="cube-2" className=''>
                      
            </div>
        </div>
    </div>
  )
};

export default Footer;
