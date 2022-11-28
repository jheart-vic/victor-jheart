import React from 'react'
import { AiFillSmile } from "react-icons/ai";
import './Home.css'


const Home = () => {
  return (
    <div className='home'>
      <div className="home-text">
        <h1> Welcome To My Space, Nice To Meet You!<span className='smiley'><AiFillSmile /></span></h1>
          <small className='home-paragraph'>
            Click projects to see my work
          </small>
      </div>
    </div>
  )
}

export default Home
