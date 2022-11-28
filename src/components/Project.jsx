import React, { useState } from 'react'
import './Project.css'
import Pop from './Popup';


const Project = (props) => {
  const {title, id, technologies_stack } = props.project;
  const [modalShow, setModalShow] = useState(false);
  function setModal(e) {
   setModalShow(true)
  }
  return (
    <div className='pro'>
      <h1>{title}</h1>
        <h2 className='built-with'>Built With:</h2>
      <div className='stack'>
        {technologies_stack.split(' ').map(item  => (
        <p className='eachstack'>{item}</p>
      ))}
      </div>
      <button className='seeproject' id={id} onClick={setModal} >
        See project
      </button>
       
      <Pop
        show={modalShow}
        onHide={() => setModalShow(false)}
        project={props.project}
      />
    </div>
  )
}

export default Project
