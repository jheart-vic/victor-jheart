import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Pop(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         { props.project.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='modal-image'><img src={props.project.image} alt={props.project.title} /></div>
        <p>{props.project.description}</p>
      <div className='stack'>
        <h2 className='built-with'>Built With:</h2>
        {props.project.technologies_stack.split(' ').map(item  => (
        <p className='eachstack' key={props.project.id}>{item}</p>
      ))}
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className='popupbtn'><a href={props.project.live_link}>Live link</a></Button>
        <Button className='popupbtn'><a href={props.project.source_link}>Github_link</a></Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Pop;