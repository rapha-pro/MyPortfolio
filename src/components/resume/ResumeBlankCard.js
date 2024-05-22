import React from "react"


function ResumeBlankCard ( {title, coursesList} ) {

    const CourseList = () => {
        return (
            <div className=''>
                {(title === "year i") ? 
                  <div>
                    <h5 className="mb-8 group-hover:text-white duration-300 italic">Hover to See Grades</h5>
                  </div> : ""}

                <h3 className='text-xl md:text-2xl font-semibold group-hover:text-white duration-300 mb-8 capitalize'>{title}</h3>
                <ul className='flex flex-col gap-6'>
                    {Object.keys(coursesList).map((course, index) => (
                    <div className='group'>
                        <li key={index}>
                            <span className='text-lg text-gray-300 group-hover:text-gray-300 duration-100'>{course}</span>
                            {coursesList[course][0] !== "" && <span className='text-gray-400 italic'>{" "}({coursesList[course][0]})</span>}  
                        </li>
                        {
                            coursesList[course][1] !== "" ? <p className='text-gray-400 italic group-hover:visible invisible duration-200'>Grade: <span className=''>{coursesList[course][1]}</span></p>
                            :
                            <p className='text-gray-400 italic'>In progress..</p>

                        }
                    </div>
                    ))}
                </ul>
            </div>
        );
      };
      
  return (
    <div className="w-full h-1/2 group flex mt-10">
      <div className='w-10 h-[6px] bgOpacity mt-16 relative'>
        <span
            className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex
            justify-center items-center bg-black bg-opacity-60 group'
        >
            <span
                className='w-3 h-3 rounded-full bg-bodyColor inline-flex 
                group-hover:bg-designColor duration-300'
            >
            </span>
        </span>
      </div>
      
      <div
        className='w-full bg-black bg-opacity-20 duration-300 flex flex-col justify-center 
        rounded-lg p-4 lgl:px-10 gap-6 lgl:gap-5 shadow-shadowOne'
      >

        <div className='flex flex-col lgl:flex-row justify-between lgl:items-center gap-4 p-2 lgl:gap-0'>
          {CourseList()}    
        </div>
      </div>
    </div>
  )
};

export default ResumeBlankCard;
