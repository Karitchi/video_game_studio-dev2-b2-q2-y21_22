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

            </Carousel>
        </div>
    )
}


export default Carousel_career
