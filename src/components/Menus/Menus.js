import React from 'react';
import './Menus.css';
import { Link} from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { FcHome,FcAbout,FcPortraitMode,FcBiotech,FcGraduationCap, FcVideoProjector,FcBusinessContact } from "react-icons/fc";
import photo from '../../assets/images/Photo2.jpg';

const Menus = ({toggle}) => {
  return (
    <>
      {toggle ? (
         <>
         <Zoom>
              <div className='navbar-profile-pic'> 
          <img src={photo}  alt ='profile-image' />
           </div>

         </Zoom>
        <Fade left>
      <div className='nav-items'>
        <div className='nav-item'>

            <div className='nav-link'>
              <Link to="home" spy={true} smooth={true} offset={-100} duration={100}  >
                <FcHome/> Home
              </Link>
             </div>
            
            <div className='nav-link'>
             <Link to="about" spy={true} smooth={true} offset={-100} duration={100}  >
               <FcAbout/> About
             </Link>
            </div>
           
             
            <div className='nav-link'>
            <Link to="educations" spy={true} smooth={true} offset={-100} duration={100}  >
               <FcGraduationCap /> Education
            </Link>
            </div>
            
            
            <div className='nav-link'>
               <Link to="technology" spy={true} smooth={true} offset={-100} duration={100}>
                <FcBiotech />Tech Stack
               </Link>
             </div>
           
            <div className='nav-link'>
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector/> Projects
                </Link>
             
            </div>
            {/* <div className='nav-link'>
                <Link to="testimonial" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVoicePresentation/> Testimonial
                </Link>
             
            </div> */}
            <div className='nav-link'>
                <Link to="workexp" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcPortraitMode /> Work Experience
                </Link>
             
            </div>
            <div className='nav-link'>
                <Link to="contacts" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBusinessContact />  Contacts
                </Link>
            
              
            </div>
        </div>
      </div>
      </Fade>
      
      </>
      ) : (
        <>
         <div className='nav-link'>
              <Link to="home" spy={true} smooth={true} offset={-100} duration={100}  >
                <FcHome/> 
              </Link>
             </div>
            
            <div className='nav-link'>
             <Link to="about" spy={true} smooth={true} offset={-100} duration={100}  >
               <FcAbout/> 
             </Link>
            </div>
           
             
            <div className='nav-link'>
            <Link to="educations" spy={true} smooth={true} offset={-100} duration={100}  >
               <FcGraduationCap /> 
            </Link>
            </div>
            
            
            <div className='nav-link'>
               <Link to="technology" spy={true} smooth={true} offset={-100} duration={100}>
                <FcBiotech />
               </Link>
             </div>
           
            <div className='nav-link'>
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector/> 
                </Link>
             
            </div>
            {/* <div className='nav-link'>
                <Link to="testimonial" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVoicePresentation/> 
                </Link>
             
            </div> */}
            <div className='nav-link'>
                <Link to="workexp" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcPortraitMode /> 
                </Link>
             
            </div>
            <div className='nav-link'>
                <Link to="contacts" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBusinessContact /> 
                </Link>
            
              
            </div>
        </>
      ) }



      

    </>
  )
}

export default Menus