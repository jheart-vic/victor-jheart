import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaAngellist } from 'react-icons/fa';
import './About.css'
import my_photo from '../assets/images/my_photo.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-img">
        <img src={my_photo} alt="profile" />
      </div>
    <div className="about-text">
      <h1>Hey There, I'm <span className="name">Victor David</span></h1>
      <h2>I'm a Full Stack Web Developer with a passion for creating beautiful and functional websites. 
        I'm proficient in HTML, CSS, JavaScript, React, Ruby, and Ruby on Rails </h2>
      <h2 className='about-paragraph'>
               I can help you build a product ,
                feature or website Look through some of my work and experience!
                 I know you will like what you see and don’t hestiate to contact me for your projects.
      </h2>
      <div className="about-icons">
        <h2 className='conection-header'>Let's connect:</h2>
      <ul className='d-flex gap-10 me-4 list-unstyled about-ul'>
      <li><a href="https://www.amazon.com"><AiFillGithub/></a></li>
      <li><a href="https://www.goal.com"><AiFillLinkedin/></a></li>
      <li><a href="https://www.goggle.com"><AiOutlineTwitter /></a></li>
      <li><a href="https://angel.co/u/victor-chiemerie-122"><FaAngellist /></a></li>
      </ul>
      </div>
    </div>
  </div>
  )
}

export default About
