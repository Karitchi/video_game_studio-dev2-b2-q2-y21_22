import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from './Card';
import './style/Caroussel.css'



function Carousel_career(props) {

    return (
        <div className="carousel_career">
            <h1>Current Job Openings:</h1>

            <Carousel interval={null}>
                {props.dataJobs.map((i, index) => {
                    return(
                        <Carousel.Item key ={`${index} - ${i}`}>
                            <Card title={i.job_title} location={i.location} skills={i.skills_and_experience} contact={props.dataCompany.company_email} description={i.job_description} tasks={i.tasks}/>
                        </Carousel.Item>);
                })
                }
            </Carousel>
        </div>
    )
}


export default Carousel_career
