import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from './Card';
import './style/Caroussel.css'

function Carousel_career(){


    return(
        <div className="carousel_career">
            <h1>Current Job Openings:</h1>
            <Carousel interval={null}>
                <Carousel.Item>
                    <Card title="Job Title 1" location="Brussels" skills="Only the best" job="Serving cofee" description="Quisque euismod, dolor a rhoncus placerat, nunc libero ultrices tortor, quis dapibus urna tortor ut nunc. Nunc faucibus ex vel nibh feugiat, ut venenatis nisl sodales." contact='Contact us here!'/>
                </Carousel.Item>
                <Carousel.Item>
                    <Card title="Job Title 2" location="Brussels" skills="Only the best" job="Serving cofee" description="Quisque euismod, dolor a rhoncus placerat, nunc libero ultrices tortor, quis dapibus urna tortor ut nunc. Nunc faucibus ex vel nibh feugiat, ut venenatis nisl sodales." contact='Contact us here!'/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carousel_career