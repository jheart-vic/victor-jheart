import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiFillSmile, AiOutlineTwitter} from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-text">
        <div className="intro">
        <h1 className='intro-text'>
          Hi I'm Victor David,<br/>A certified Full-stack developer<br/>with passion for solving problems<br/> nice To meet you!
          <span className="smiley"><AiFillSmile /></span>
        </h1>
        <div className="links">
          <Link to='projects' className='home-link'>Go to projects</Link>
          <Link to='about' className='home-link'>More about me</Link>
          <button className="home-btn resume" >
            <a href="https://docs.google.com/document/d/1sYk_zXmg-_qhOfdv9rdE-AaV8zEe6B7DIt8kL-FzTZc/edit">
              See Resume
            </a>
          </button>
        </div>
        </div>
        <div className='connections'>
          <div className='socials'>
            <ul className="me-4 list-unstyled home-ul">
              <li><a href="https://github.com/jheart-vic"><AiFillGithub /></a></li>
              <li><a href="https://www.linkedin.com/in/victor-chiemerie"><AiFillLinkedin /></a></li>
              <li><a href="https://twitter.com/Victorjheart"><AiOutlineTwitter /></a></li>
              <li><a href="https://angel.co/u/victor-chiemerie-122"><FaAngellist /></a></li>
            </ul>
          </div >
 
        </div>
      </div>
    </div>
  );
};

export default Home;
