import React, {useState} from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import './style/Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Card(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className='card' onClick={handleShow}>
            <div className='content_card'>
                <h1>{props.title}</h1>
                <div>Location : {props.location}</div>
                <div>{props.description}</div>
                <button className="button_card" onClick={handleShow}>More info</button>
            </div>

            <div className='modal' onClick={e => e.stopPropagation()}>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Current Job Opening:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>{props.title}</h2>
                        <h3>Location: {props.location}</h3>
                        <h3>Description:</h3>
                        <div>{props.description}</div>
                        <h3>Skills and Experiences:</h3>
                        <div>
                            {props.skills.map((skill, index) => {
                                return (<ul key = {index}> {skill} </ul>)
                            })}
                        </div>
                        <h3>What You'll Be Doing:</h3>
                        <div>
                            {props.job.map((job, index) => {
                                return (<ul key={{index}}> {job} </ul>)
                            })}
                        </div>
                        <div className='contact'>{props.contact}</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Card
