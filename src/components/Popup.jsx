import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Pop(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='modal'
    >
      <Modal.Header className='modal-body'>
        <Modal.Title id="contained-modal-title-vcenter">
         { props.project.title}
        </Modal.Title>
        <Button onClick={props.onHide}>X</Button>
      </Modal.Header>
      <Modal.Body className='modal-body'>
        <div className='modal-image'><img src={props.project.image} alt={props.project.title} /></div>
        <p>{props.project.description}</p>
      <div className='stack'>
        {props.project.technologies_stack.map(item  => (
        <p className='eachstack' key={props.project.id}>{item}</p>
      ))}
      </div>
      </Modal.Body>
      <Modal.Footer className='modal-body'>
      <Button className='popupbtn'><a href={props.project.live_link} target="_blank" rel="noopener noreferrer">Live link</a></Button>
        <Button className='popupbtn'><a href={props.project.source_link}>Github_link</a></Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Pop;