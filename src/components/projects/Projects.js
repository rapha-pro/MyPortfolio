import React from 'react';
import {projectOne, projectTwo, projectThree} from '../../assets/index';
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';

export default function Projects() {
    return (
        <section 
            id="projects"
            className='w-full py-20 border-b-[1px] border-b-black'
        >
            <div className='flex justify-center text-center'>
            <Title 
                title="view recent" 
                description="Projects"  
            />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14'>
                <ProjectsCard  
                    title="SOCIAL MEDIA CLONE"
                    des= "lorem ipsum dolor sit amet con et nonum lorem ipsum dolor sit amet nonum"
                    src={projectOne}
                    href=""
                />
                <ProjectsCard  
                    title="E-commerce Website"
                    des= "lorem ipsum dolor sit amet con et nonum lorem ipsum dolor sit amet nonum"
                    src={projectTwo}
                    href=""
                />
                <ProjectsCard  
                    title="Chatting App"
                    des= "lorem ipsum dolor sit amet con et nonum lorem ipsum dolor sit amet nonum"
                    src={projectThree}
                    href=""
                />
                <ProjectsCard  
                    title="Spotify Clone"
                    des= "lorem ipsum dolor sit amet con et nonum lorem ipsum dolor sit amet nonum"
                    src={projectThree}
                    href=""
                />
                <ProjectsCard  
                    title="App website"
                    des= "lorem ipsum dolor sit amet con et nonum lorem ipsum dolor sit amet nonum"
                    src={projectOne}
                    href=""
                />
                <ProjectsCard  
                    title="Call Center Webapp"
                    des= "lorem ipsum dolor sit amet con et nonum lorem ipsum dolor sit amet nonum"
                    src={projectTwo}
                    href=""
                />
                
            </div>
        </section>
    );

}