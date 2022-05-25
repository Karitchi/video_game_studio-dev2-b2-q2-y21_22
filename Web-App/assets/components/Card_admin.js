import React, {useState,useEffect} from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form'
import './style/Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Card_admin(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [listSkills, setListSkills] = useState([])
    const [listTasks, setListTasks] = useState([])

    useEffect(()=>{setListSkills(props.skills)},[])
    useEffect(()=>{setListTasks(props.tasks)},[])

    function new_form_skill() {
        setListSkills([...listSkills, "New"])
    }

    function new_form_task() {
        setListTasks([...listTasks, "New"])
    }


    return(
        <div className='card_admin' onClick={handleShow}>
            <div className='content_card'>
                <h1>{props.title}</h1>
                <div>Location : {props.location}</div>
                <div>{props.description}</div>
                <div className="buttons_admin">
                    <Button variant="light"  onClick={handleShow} size="sm">Modify</Button>
                    <Button variant="light" size="sm">Delete</Button>
                </div>
            </div>

            <div className='modal' onClick={e => e.stopPropagation()}>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modify the job:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="admin_job" controlId="title">
                                <Form.Label>Job title:</Form.Label>
                                <Form.Control placeholder={props.title} />
                            </Form.Group>
                            <Form.Group className="admin_job" controlId="location">
                                <Form.Label>Job location:</Form.Label>
                                <Form.Control placeholder={props.location} />
                            </Form.Group>
                            <Form.Group className="admin_job" controlId="description">
                                <Form.Label>Job description:</Form.Label>
                                <Form.Control placeholder={props.description} />
                            </Form.Group>
                            <Form.Group className="admin_job" controlId="skills">
                                <Form.Label>Job skills:</Form.Label>
                                    {listSkills.map((skill, index) => {
                                        return (<Form.Control placeholder={skill} key={`${index} - ${skill}`}/>)
                                    })}
                                <Button variant="light" onClick={new_form_skill}>
                                    Add new
                                </Button>
                            </Form.Group>
                            <Form.Group className="admin_job" controlId="job">
                                <Form.Label>What he'll Be Doing:</Form.Label>
                                    {listTasks.map((task, index) => {
                                        return (<Form.Control placeholder={task} key={`${index} - ${task}`}/>)
                                    })}
                                <Button variant="light" onClick={new_form_task}>
                                    Add new
                                </Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className={"card_admin_button"}>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary">
                                Create
                            </Button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Card_admin


