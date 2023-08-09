import React, { useState, useRef } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import emailjs from '@emailjs/browser';
import { motion} from 'framer-motion'

function Contact (props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");


  const form = useRef();


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
        sendEmail(e);
        console.log(name, phoneNumber, email, subject, message);

    }


  }


  function sendEmail(e) {
    e.preventDefault();    //This is important,  the email won't send without it

    console.log("normally sent");

    emailjs.sendForm('service_mgkhnb9', 'template_iiia6jy', form.current, '_7aUTVC31iErlK7fk')
      .then((result) => {
          window.location.reload()  //This is to reload the page (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
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
        
      <div 
        className='w-full'>
    
        <div className='w-full h-auto flex flex-col lgl:flex-row justify-between gap-10 lgl:gap-0 '>
          
          <ContactLeft  />

          <motion.div 
            initial = {{opacity:0, translateX: 40}}
            whileInView = {{opacity:1, transition:{duration:1.2}, translateX: 0}}
            className='w-full lgl:w-[60%] h-full lgl:h-[52.5rem] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex
            flex-col gap-8 p-4 lgl:p-8 shadow-shadowOne  rounded-lg'>
            <form className='w-full flex flex-col gap-4 lgl:gap-6 py-3 font-titleFont font-medium' ref={form} onSubmit={sendEmail}>
                <div className='w-full flex flex-col lgl:flex-row gap-10'>

                  <div className='w-full lgl:w-1/2 flex flex-col gap-4 group'>
                    <label for='name' className='text-sm text-gray-400 uppercase tracking-wide group-hover:text-gray-300'>Name</label>
                    <input 
                      onChange={(e)=>setName(e.target.value)} 
                      value={name} 
                      type='text' 
                      id='name' 
                      name="user_name"
                      className= {`${
                        errorMsg === nameErrorMsg && 
                        'outline-orange-500' 
                      } 
                      contactInput px-4`}
                     />
                  </div>

                  <div className='w-full lgl:w-1/2 flex flex-col gap-4 group'>
                    <label for='phoneNumber' className='text-sm text-gray-400 uppercase tracking-wide group-hover:text-gray-300'>phone number</label>
                    <input 
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber} 
                      type='text' 
                      id='phoneNumber' 
                      name="user_phoneNumber"
                      className= "contactInput px-4" 
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
                    name='user_email'
                    className= {`${
                      errorMsg === emailErrorMsg && 
                      'outline-orange-500' 
                    } 
                    contactInput px-4`}
                  />
                </div>

                <div className='flex flex-col gap-4 group'>
                  <label for='subject' className='text-sm text-gray-400 uppercase tracking-wide group-hover:text-gray-300'>subject</label>
                  <input 
                    onChange={(e)=> setSubject(e.target.value)}
                    value={subject}
                    type='text' 
                    id='subject' 
                    name='user_subject'
                    className= {`${
                      errorMsg === subjectErrorMsg && 
                      'outline-orange-500' 
                    } 
                    contactInput px-4`}
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
                    name="user_message"
                    className= {`${
                      errorMsg === bodyErrorMsg && 
                      'outline-orange-500' 
                    } 
                    contactTextArea p-4`} 
                  >
                  </textarea>
                </div>

                <div className='w-full mt-14'>
                  <button
                    onClick={handleSend}
                    className='w-full h-12 rounded-lg text-gray-400 bg-[#141518]
                    text-base tracking-wider hover:border-green-500 hover:border-[1px]
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
          </motion.div>


        </div>
                    
      </div>
    </section>
  )
};

export default Contact;
