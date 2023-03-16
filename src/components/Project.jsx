import React, { useState } from 'react'
import './Project.css'
import Pop from './Popup';


const Project = (props) => {
  const { id, title, image } = props.project;
  const [modalShow, setModalShow] = useState(false);
  function setModal(e) {
   setModalShow(true)
  }
  return (
    <div
     className='pro' 
     style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '300px',
      width:  '80%',
    }}
    >
      <div className="title">
       <h1 className='project-title'>{title}</h1>
      </div>
      {/* <h1>{title}</h1>
        <h2 className='built-with'>Built With:</h2>
      <div className='stack'>
        {technologies_stack.split(' ').map(item  => (
        <p className='eachstack'>{item}</p>
      ))}
      </div> */}
      <div className="project-btn">
      <button className='seeproject' id={id} onClick={setModal} >
        See project
      </button>

      </div>
       
      <Pop
        show={modalShow}
        onHide={() => setModalShow(false)}
        project={props.project}
      />
    </div>
  )
}

export default Project
