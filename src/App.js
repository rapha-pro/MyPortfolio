import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Feature from './components/features/features';
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/contact';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footer/FooterBottom';


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText pl-4 pr-8">
        <Navbar  />
      <div className="max-w-screen-xl xl:max-w-screen-2xl lgl:px-8 ">
        <Home  />
        <Feature  />
        <Projects />
        <Resume />
        <Testimonial  />
        <Contact  />
        <Footer  />
        <FooterBottom  />
      </div>
    </div>
  );
}

export default App;
