import React from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./skills";
import Achievements from "./Achievements";
import Experience from "./Experience";
import { useState } from "react";

export default function Resume() {

    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [achievementData, setAchievementData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);

    return (
        <section
            id="resume"
            className="w-full py-24 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center text-center">
                <Title title="view my" description="resume" />
            </div>
            <div>
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
                    <li 
                        onClick={()=>
                            setEducationData(true) &
                            setSkillData(false) &
                            setAchievementData(false) &
                            setExperienceData(false)
                        } 
                        className={`${educationData ? "md:border-r md:border-r-gray-100 xl:border-r-designColor border-2 border-designColor rounded-lg" :
                        "md:border-r md:border-r-gray-200 xl:border-r-transparent"} resumeLi`}
                    >
                        Education
                    </li>
                    <li 
                        onClick={()=>
                            setEducationData(false) &
                            setSkillData(true) &
                            setAchievementData(false) &
                            setExperienceData(false)
                        } 
                        className={`${skillData ? "border-2 border-designColor rounded-lg" : "border-transparent"} resumeLi`}
                    >   
                        Professional Skills
                    </li>
                    <li 
                        onClick={()=>
                            setEducationData(false) &
                            setSkillData(false) &
                            setAchievementData(false) &
                            setExperienceData(true)
                        } 
                        className={`${experienceData ? "md:border-r md:border-r-gray-200 xl:border-r-designColor border-2 border-designColor rounded-lg" :
                         "md:border-r md:border-r-gray-200 xl:border-r-transparent"} resumeLi`}
                    >
                        Experience
                    </li>
                    <li 
                        onClick={()=>
                            setEducationData(false) &
                            setSkillData(false) &
                            setAchievementData(true) &
                            setExperienceData(false)
                        } 
                        className={`${achievementData ? "border-2 border-designColor rounded-lg" : "border-transparent"} resumeLi`}
                    >
                        Achievements
                    </li>
                </ul>
            </div>

            
            {educationData   && <Education  />    }
            {skillData       && <Skills  />       }
            {achievementData && <Achievements  /> }
            {experienceData  && <Experience  />   }
        </section>
    );
}
