import React from 'react';
import './home.css';
import Typewriter from 'typewriter-effect';
import Kratul_Resume from '../../assets/docs/Kratul_Resume.pdf';
import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <>
     <div className='container-fluid home-container' id='home'>
       <div className='container home-content'>
        <Fade right>
         <h2>Hi 👋  I'm a </h2>
         <h1>
          <Typewriter
           options={{
           strings: ['Kratul Singh Parihar', 
           'FullStack Developer',
            'MERN Stack Developer',
            'React native Developer'],
             autoStart: true,
            loop: true,
            }}
           />
         </h1>
         </Fade>
         <Fade bottom>
         <div className='home-buttons'>
          <button className='btn btn-hire'>Hire Me</button>
          <a className='btn btn-cv' href= {Kratul_Resume} download="Kratul_Resume.pdf" >My Resume</a>
         </div>
         </Fade>
       </div>
     </div>
    </>
  )
}

export default Home