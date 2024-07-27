import React from 'react'
import './Contact.css';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Rotate from 'react-reveal/Rotate';
const Contact = () => {
  return (
    <>
     <div className='contact' id='contacts'>
        <div className=' card card0 border-0'>
          <div className='row'>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                <div className='card1'>
                    <div className='row border-line'>
                      <img src=' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVWaRzSe5JaicPXSekXIVg3emsdY8kSInmkQ&usqp=CAU' 
                      alt='contact' className='image'/>
                    </div>
                </div>
            </div>

            <div className='col-md-6 col-lg-6'>
                  <Rotate>
                  <div className='card2 d-flex card border-0 px-4 py-5'>
                      <div className='row'>
                    <div className='row'>
                      <h6>Contact With
                      <FaLinkedin className='ms-2' size={30} color='blue'/>
                       <FaGithubSquare className='ms-2' size={30} color='black'/>
                       <MdMarkEmailRead  className='ms-2' size={30} />
                      </h6>
                    </div>
                    
               
                  <div className='row px-3 mb-4'>
                   <div className='line' />
                      <small className='or text-center'>Or</small>
                     <div className='line' />
                </div>
                
                 <div className='row px-3'>
                <input type='text' name='name' placeholder='Write Your name ?' className='mb-3'/> 
               </div>
              
              <div className='row px-3'>
                <input type='Email' name='email' placeholder='Write Your Email ?' className='mb-3'/> 
               </div>
              <div className='row px-3'>
                 <textarea type='textarea' name='msg' placeholder='Write Your Message' className='mb-3'/> 
               </div>
                
                 <div className='row px-3'>
                 <button className='button'>Send Message</button> 
               </div>
           






            </div>
             </div>
             </Rotate>
              </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default Contact