import React from 'react';
import {projectOne, projectTwo, projectThree, trivia, interactify, galleria, shoppy_mart, christmas, english, snake, snakeSim, hangman, hangman2, hangman3, weather, memory, internship_nest} 
from '../../assets/index';
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';
import { motion} from 'framer-motion'

export default function Projects() {
   
    return (
        <section 
            id="projects"
            className='w-full py-20 border-b-[1px] border-b-black'
        >
            <div 
                className='flex justify-center text-center'>
            <Title 
                title="view recent" 
                description="Projects"  
            />
            </div>
            <motion.div 
                initial = {{opacity:0, scale: 1.1}}
                whileInView = {{opacity:1, transition:{duration:.5}, scale:1}}
                className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 flex-grow items-baseline'>

                {/* This Project on StandBy */}
                {/* <ProjectsCard  
                    title="Internship Nest"
                    des= " Currently in the development of an internship finder application, 
                    consolidating diverse internship opportunities from across the web into a 
                    centralized platform for enhanced student accessibility, reducing by greatly 
                    application times"
                    src={internship_nest}
                    gitHref=""                    
                    globeHref=""
                    technologies= {["React", "Node.js", "Express.js", "MongoDB", "Tailwind"]}
                    space={0}
                /> */}
                
                <ProjectsCard  
                    title="Galleria Webapp"
                    des= "Created a gallery web application allowing artists to showcase their art, 
                    as well as interact with other artists artworks on the platform"
                    src={galleria}
                    gitHref=""                    
                    globeHref=""
                    youtubeHref="https://youtu.be/BV4YvM95jKQ"
                    technologies= {["Node.js", "Express.js", "MongoDB", "Pug", "Html", "css"]}
                    space={0}
                />

                <ProjectsCard  
                    title="Shoppy mart"
                    des= "Developed a simulated online store web application that emulates fundamental
                    store operations with RESTFUL Apis in MongoDB"
                    src={shoppy_mart}
                    gitHref=""                    
                    globeHref=""
                    technologies= {["Node.js", "Express.js", "MongoDB", "Pug", "Html", "css"]}
                    space={0}
                />

                <ProjectsCard  
                    title="Christmas Wish website"
                    des= "Rendered a functional and responsive website interface, dedicated to 
                    conveying Christmas and New Year wishes"
                    src={christmas}
                    gitHref="https://github.com/rapha-pro/christmas-static"                    
                    globeHref="https://raphael-xmas-phi.vercel.app/"
                    technologies= {["Html", "css", "javascript"]}
                    space={0}
                />

                <ProjectsCard  
                    title="English Trivia"
                    des= "This is my first website. As part of my high school project, I
                    Implemented a trivia web app that gamified some English lessons into
                    interactive quizzes. The app aimed to make learning engaging and fun for students
                    while fostering an understanding of the topics"
                    src={english}
                    gitHref="https://github.com/rapha-pro/English-Trivia"                    
                    globeHref=""
                    technologies= {["Django", "JavaScript", "bootstrap", "Html", "css"]}
                    space={0}
                />

                <ProjectsCard  
                    title="Purblace place Memory Game"
                    des= " Implemented a basic version, simulating the Purblace Place memory game using React"
                    src={memory}
                    gitHref="https://github.com/rapha-pro/Memory-game"
                    globeHref=""
                    technologies={["javascript", "react", "bootstrap", "css"]}
                    space={0}
                />

                <ProjectsCard  
                    title="Weather App"
                    des= "Developed a user-friendly GUI program using Python and Tkinter that 
                     utilizes an API to provide accurate weather information for multiple cities. The application 
                     ensures easy access to essential weather details"
                    src={weather}
                    gitHref="https://github.com/rapha-pro/Weather-app"
                    globeHref=""
                    technologies= {["Python", "Tkinter"]}
                    space={0}
                />
                <ProjectsCard  
                    title="Snake-Ladder game Simulation"
                    des= "As part of a course project in first year, I Programmed a simple two-players simulation navigating
                    the snake-ladder game with pygame library"
                    src={snakeSim}
                    gitHref="https://github.com/rapha-pro/Snake-Ladder-Simulation"
                    globeHref=""
                    technologies= {["Python", "Pygame"]}
                    space={40}
                />
                <ProjectsCard  
                    title="Hangman Game"
                    des= "Programmed a GUI, a modern version of the Hangman game with a visual and interactive User
                     interface to make the game appealing and entertaining for the user"
                    src={hangman3}
                    gitHref="https://github.com/rapha-pro/Hangman"
                    globeHref=""
                    technologies= {["Python", "Pygame"]}
                    space={40}
                />
                <ProjectsCard  
                    title="Snake Game"
                    des= "I designed and programmed a user-friendly snake game that includes a scoring system 
                    to track the player's performance"
                    src={snake}
                    gitHref="https://github.com/rapha-pro/Snake-game"
                    globeHref=""
                    technologies= {["Python", "Tkinter"]}
                    space={40}
                />
                
            </motion.div>
        </section>
    );

}