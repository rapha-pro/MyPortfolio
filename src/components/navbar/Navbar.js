import React, { useState, useEffect } from 'react';
import {mylogo} from "../../assets/index"
import { navLinksData } from '../../constants'
import Social from '../home/Social';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { ABOUT_TEXT } from '../../constants/aboutme';
import Logo from './logo';


export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(()=>{

          window.addEventListener('resize', ()=>{setShowMenu(false)}  )


    }, [])


  return (
    <div id='navbar' className='w-full h-24 sticky z-50 bg-bodyColor top-0 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-700'>
        <Logo />
        <div>
            <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
                {
                    navLinksData.map(({ _id, title, link }) => (
                        <li 
                            className="text-base font-normal text-gray-400 tracking-wide cursor-pointer
                            hover:text-designColor duration-300ms"
                            key={_id}>
                            <Link
                                activeClass='active'
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {title}
                            </Link>
                        </li>
                    
                    ))
                }
            </ul>
            <span onClick={ ()=> setShowMenu(!showMenu)} className='text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center
            justify-center rounded-full text-designColor cursor-pointer'>
                <FiMenu  /> 
            </span>
            {
                showMenu && (
                    <div className='absolute w-[80%] h-screen overflow-scroll top-0 left-0 bg-gray-900 
                    p-4 scrollbar-hide'>
                        <div className='flex flex-col gap-8 py-2 relative'>
                            <div>
                            <Logo width='w-14'/>
                                <div className='text-sm text-gray-300 mt-6 leading-6 tracking-wide flex flex-col gap-2'>
                                    <p> 
                                        { ABOUT_TEXT[1] }
                                        <span className='font-bold italic'> { ABOUT_TEXT[0] }</span> <br />
                                    </p>
                                    <p>{ ABOUT_TEXT[2] }</p>
                                    <p className='pt-1'> { ABOUT_TEXT[3] } </p>
                                    <p> { ABOUT_TEXT[4] } </p>
                                </div>
                            </div>
                            <ul className='flex flex-col gap-4'>
                                {
                                    navLinksData.map((item)=>
                                        <li
                                            key={item._id}
                                            className='text-base font-normal text-gray-400 tracking-wide cursor-pointer
                                            hover:text-designColor duration-300ms'
                                        >
                                            <Link
                                                onClick={()=> setShowMenu(false)}
                                                activeClass='active'
                                                to={item.link}
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    )
                                }
                            </ul>
                            <div className='mt-3'>
                                <h2 className='text-base uppercase font-titleFont mb-4 '>
                                    find me on
                                </h2>  
                                <Social  />
                            </div>
                            <span onClick={()=> setShowMenu(false)} className='absolute top-4 right-4 text-gray-400 hover:text-designColor
                            duration-300 text-2xl cursor-pointer'>
                                <MdClose />
                            </span>
                        
                        </div>
                    </div>

                )
            }
        </div>
    </div>
  );
}