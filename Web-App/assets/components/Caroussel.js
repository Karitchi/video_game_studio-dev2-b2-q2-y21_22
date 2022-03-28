import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from "./Card";

const handleDragStart = (e) => e.preventDefault();

const items = [
    <Card onDragStart={handleDragStart} title={"Job Title 1"} location={"Brussels"} description={"Quisque euismod, dolor a rhoncus placerat, nunc libero ultrices tortor, quis dapibus urna tortor ut nunc. Nunc faucibus ex vel nibh feugiat, ut venenatis nisl sodales."}/>,
    <Card onDragStart={handleDragStart} title={"Job Title 2"} location={"Brussels"} description={"Quisque euismod, dolor a rhoncus placerat, nunc libero ultrices tortor, quis dapibus urna tortor ut nunc. Nunc faucibus ex vel nibh feugiat, ut venenatis nisl sodales."}/>,
    <Card onDragStart={handleDragStart} title={"Job Title 3"} location={"Brussels"} description={"Quisque euismod, dolor a rhoncus placerat, nunc libero ultrices tortor, quis dapibus urna tortor ut nunc. Nunc faucibus ex vel nibh feugiat, ut venenatis nisl sodales."}/>,
    <Card onDragStart={handleDragStart} title={"Job Title 4"} location={"Brussels"} description={"Quisque euismod, dolor a rhoncus placerat, nunc libero ultrices tortor, quis dapibus urna tortor ut nunc. Nunc faucibus ex vel nibh feugiat, ut venenatis nisl sodales."}/>,

];

function Caroussel() {
    return (
        <div>
            <h1>Current job Openings:</h1>
            <AliceCarousel mouseTracking items={items} />
        </div>

    );
}

export default Caroussel