import React, { useState } from "react";
import Title from "../layouts/Title";
import Slider from "react-slick";
import { testimonialOne, testimonialTwo, quote, male, female, review } from "../../assets/index";
import { RiStarFill } from 'react-icons/ri';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import LeftCard from "./LeftCard";
import TextCard from "./TextCard";
import { motion} from 'framer-motion'


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className= 'absolute -top-9 lgl:top-0 right-0 w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl
            text-gray-400 flex justify-center items-center shadow-shadowOne cursor-pointer z-10'
            onClick={onClick}
        >
            <HiArrowRight />
        </div>
        
    );
}


function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className= 'absolute -top-9 lgl:top-0 right-20 w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl
            text-gray-400 flex justify-center items-center shadow-shadowOne cursor-pointer z-10'
            onClick={onClick}
        >
            <HiArrowLeft />
        </div>
        
    );
}


function Testimonial() {
    const [dotActive, setDotActive] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4300,
        nextArrow: <SampleNextArrow  />,
        prevArrow:<SamplePrevArrow/>,

        beforeChange: (prev, next) => {
            setDotActive(next);
        },

        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <ul 
                style={{ 
                   display: "flex",
                   justifyContent: "center",
                   gap: "15px",
                   marginTop: "20px"

                }}
                > 
                {dots} 
            </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={
                i === dotActive  ? 
                {
                    width: "12px",
                    height: "12px",
                    color: "blue",
                    background: "#ff014f",
                    borderRadius: "50%",
                    cursor: "pointer",
                }

                :

                {
                    width: "12px",
                    height: "12px",
                    color: "blue",
                    background: "gray",
                    borderRadius: "50%",
                    cursor: "pointer",
                }
              }
            >
             
            </div>
          )
      };

  return (
    <section
        id="testimonial"
        className="w-full h-auto py-20 border-b-[1px] border-b-black"
    >
         <div className="flex justify-center items-center text-center">
                <Title title={"what people say"} description={"Website Review"} />
        </div>
        <motion.div 
            initial = {{opacity:0}}
            whileInView = {{opacity:1, transition:{duration:1.8}}}
            className="max-w-6xl mx-auto ">
            <Slider {...settings}>
                <div className='w-full'>
                    <div className='w-full h-auto flex flex-col gap-10 lgl:gap-0 lgl:flex-row justify-between items-stretch'>

                        <LeftCard 
                            imageSrc={review}
                            name=""
                            username=""
                            title=""
                        />

                        
                        <TextCard
                            ReviewTitle="Impressive, Keep it up!"
                            subTitle="July 29, 2023"
                            numberOfStars={5}
                            description="
                                Nice website Raphaël! I'm amazed by the UI. From the design to navigation, especially the resume part, all sections makes it a pleasure to explore. 
                                Keep up the fantastic work!
                            "
                        />
     
                    </div>
                    
                </div>



                
            </Slider>
        </motion.div>
    </section>
  )
};

export default Testimonial;
