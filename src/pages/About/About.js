import React from 'react';
import './About.css';
import Jump from 'react-reveal/Jump';
import photo2 from "../../assets/images/Photo2.jpg"
const About = () => {
  return (
    <>
    <Jump>
     <div className='about' id='about'>
        <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img '> 
          <img src={photo2}  className='' alt='profile image' />
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
             <h1>About Me </h1>
            <p>
                My name is Kratul Singh Parihar. I am from Hamirpur, Uttar Pradesh, and I am currently pursuing my Master's of Computer Applications at Maulana Azad National Institute of Technology. I completed my graduation from Softvision College. I hold strong technical skills, including Java, OOP, OS, DBMS, ReactJS, Spring Boot, NodeJS, MySQL, and SQL.

I have worked on three significant projects. One of my notable projects is QuickBite Delivery. This app aims to streamline the process of ordering food and managing food distribution from restaurants to customers. We developed this project using React for the frontend, Spring boot for the backend, and MySQL for the database.

Another project I worked on is the Hospital Appointment System. This app allows users to book appointments from home, avoiding the need to stand in queues at hospitals. We developed this project using React for the frontend, NodeJS and ExpressJS for the backend, and Mongoose for the database.

I've also developed a Color Picker Extension using JavaScript. It allows users to select colors easily while browsing the web, enhancing their digital experience with customizable color choices.

Outside of academics and work, I love exploring new places, especially mountains. It’s a great way for me to unwind and stay inspired. I also serve as the head of the Matrix Club, where I’ve honed my leadership and management skills. I’m known for my dedication and hard work—when I commit to a task or project, I make sure to see it through to completion. I’m always eager to take on new challenges and grow both personally and professionally.
            </p>
            </div>
        </div>
     </div>
     </Jump>
    </>
  )
}

export default About;