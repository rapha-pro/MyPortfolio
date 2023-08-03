import React from 'react';
import {projectOne, projectTwo, projectThree, trivia, english, snake, snakeSim, hangman, hangman2, hangman3, weather, memory} 
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
                <ProjectsCard  
                    title="English Trivia"
                    des= "As part of my High School Project, I Implemented a trivia web app that gamified certain English lessons into
                    interactive quizzes. The app aimed to make learning engaging and fun for students
                    whil fostering an understanding of the subject."
                    src={english}
                    gitHref="https://github.com/rapha-pro/English-Trivia"                    
                    globeHref=""
                    technologies= {["Django", "JavaScript", "bootstrap", "Html", "css"]}
                    space={0}
                />

                <ProjectsCard  
                    title="Purblace place Memory Game"
                    des= " created a basic version of the Purblace Place memory game using React. 
                    The React implementation provides an interactive and enjoyable user experience."
                    src={memory}
                    gitHref="https://github.com/rapha-pro/Memory-game"
                    globeHref=""
                    technologies={["javascript", "react", "bootstrap", "css"]}
                    space={40}
                />

                <ProjectsCard  
                    title="Weather App"
                    des= "Developed a user-friendly GUI program using Python and Tkinter that 
                     utilizes an API to provide accurate weather information for multiple cities. The application 
                     ensures easy access to essential weather details."
                    src={weather}
                    gitHref="https://github.com/rapha-pro/Weather-app"
                    globeHref=""
                    technologies= {["Python", "Tkinter"]}
                    space={40}
                />
                <ProjectsCard  
                    title="Snake-Ladder game Simulation"
                    des= "As part of my course assignment, I Programmed a simple two-players simulation navigating
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
                     interface to make the game appealing and entertaining for the user."
                    src={hangman3}
                    gitHref="https://github.com/rapha-pro/Hangman"
                    globeHref=""
                    technologies= {["Python", "Pygame"]}
                    space={40}
                />
                <ProjectsCard  
                    title="Snake Game"
                    des= "I designed and programmed a user-friendly UI snake game that includes a scoring system 
                    to track the player's performance."
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