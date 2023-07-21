import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

function Contact (props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");


  const nameErrorMsg    = "name is required!";
  const emailErrorMsg   = "email is required!";
  const subjectErrorMsg = "A subject is required!";
  const bodyErrorMsg    = "A message is required!";
  
  // regex email validation 
  const emailValidation = (email) => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  }

  const handleSend=(e) => {
    // prevent button from sending infos
    e.preventDefault();

    if (name === "") {
      setErrorMsg(nameErrorMsg);
    } else if ( (email === "") )  {
      setErrorMsg(emailErrorMsg);
    }  else if (!emailValidation(email)) {
      setErrorMsg('Invalid Email Address!');
    } else if (subject === "") {
      setErrorMsg(subjectErrorMsg);
    } else if (message === "") {
      setErrorMsg(bodyErrorMsg);
    } else {
        setErrorMsg("");
        setSuccessMsg(
        `Thank you ${name}! your message has been sent Succesfully!`
        );
        console.log(name, phoneNumber, email, subject, message);
    }


  }

  return (
    <section 
        id="contact"
        className='w-full py-20 border-b-[1px] border-b-black'
    >
      <div className='flex justify-center text-center'>
        <Title
          title="contact" 
          description="get in touch"  
        />
      </div>
        
      <div className='w-full'>
        <div className='w-full h-auto flex flex-col lgl:flex-row justify-between gap-10 lgl:gap-0 '>
          
          <ContactLeft  />

          <div className='w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex
          flex-col gap-8 p-4 lgl:p-8 shadow-shadowOne  rounded-lg'>
            <form className='w-full flex flex-col gap-4 lgl:gap-6 py-3 font-titleFont font-medium '>
                <div className='w-full flex flex-col lgl:flex-row gap-10'>

                  <div className='w-full lgl:w-1/2 flex flex-col gap-4 group'>
                    <label for='name' className='text-sm text-gray-400 uppercase tracking-wide group-hover:text-gray-300'>Name</label>
                    <input 
                      onChange={(e)=>setName(e.target.value)} 
                      value={name} 
                      type='text' 
                      id='name' 
                      className= {`${
                        errorMsg === nameErrorMsg && 
                        'outline-orange-500' 
                      } 
                      contactInput`}
                     />
                  </div>

                  <div className='w-full lgl:w-1/2 flex flex-col gap-4 group'>
                    <label for='phoneNumber' className='text-sm text-gray-400 uppercase tracking-wide group-hover:text-gray-300'>phone number</label>
                    <input 
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber} 
                      type='text' 
                      id='phoneNumber' 
                      className= "contactInput" 
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-4 group'>
                  <label for='email' className='text-sm text-gray-400 uppercase tracking-wide group-hover:text-gray-300'>email</label>
                  <input 
                    onChange={(e)=> setEmail(e.target.value)}
                    value = {email}
                    type='email' 
                    id='email' 
                    className= {`${
                      errorMsg === emailErrorMsg && 
                      'outline-orange-500' 
                    } 
                    contactInput`}
                  />
                </div>

                <div className='flex flex-col gap-4 group'>
                  <label for='subject' className='text-sm text-gray-400 uppercase tracking-wide group-hover:text-gray-300'>subject</label>
                  <input 
                    onChange={(e)=> setSubject(e.target.value)}
                    value={subject}
                    type='text' 
                    id='subject' 
                    className= {`${
                      errorMsg === subjectErrorMsg && 
                      'outline-orange-500' 
                    } 
                    contactInput`}
                  />
                </div>

                <div className='flex flex-col gap-4 group'>
                  <label for='message' className='text-sm text-gray-400 uppercase tracking-wide group-hover:text-gray-300'>Message</label>
                  <textarea 
                    onChange={(e)=> setMessage(e.target.value)}
                    value={message}
                    cols='30' 
                    rows='8' 
                    id='message' 
                    className= {`${
                      errorMsg === bodyErrorMsg && 
                      'outline-orange-500' 
                    } 
                    contactTextArea`} 
                  >
                  </textarea>
                </div>

                <div className='w-full'>
                  <button
                    onClick={handleSend}
                    className='w-full h-12 rounded-lg text-gray-400 bg-[#141518]
                    text-base tracking-wider hover:border-designColor hover:border-[1px]
                    border-transparent duration-300 capitalize'
                  >
                    send message
                  </button>
                </div>

                {/* error Message */}
                {
                  errorMsg && (
                    <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center
                    text-orange-500 text-base tracking-wide animate-bounce rounded-lg italic'>
                      {errorMsg}
                    </p>
                  )
                }

                {
                  successMsg && (
                    <p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center
                    text-green-500 text-base tracking-wide animate-bounce rounded-lg italic'>
                      {successMsg}
                    </p>
                  )
                }
                
            </form>
          </div>


        </div>
                    
      </div>
    </section>
  )
};

export default Contact;
