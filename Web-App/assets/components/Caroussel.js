import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from "./Card";


function Caroussel() {

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 1000, itemsToShow: 3},
        {width: 1500, itemsToShow: 4},
        {width: 2000, itemsToShow: 5}

    ]

    return (
        <div>
            <h1>Current job Openings:</h1>
            <Carousel breakPoints={breakPoints}>
                <Card title="Job Title 1" location="Brussels" description="Quisque euismod, dolor a rhoncus placerat, nunc libero ultrices tortor, quis dapibus urna tortor ut nunc. Nunc faucibus ex vel nibh feugiat, ut venenatis nisl sodales."/>
                <Card title="Job Title 2" location="Brussels" description="Quisque euismod, dolor a rhoncus placerat, nunc libero ultrices tortor, quis dapibus urna tortor ut nunc. Nunc faucibus ex vel nibh feugiat, ut venenatis nisl sodales."/>
                <Card title="Job Title 3" location="Brussels" description="Quisque euismod, dolor a rhoncus placerat, nunc libero ultrices tortor, quis dapibus urna tortor ut nunc. Nunc faucibus ex vel nibh feugiat, ut venenatis nisl sodales."/>
                <Card title="Job Title 4" location="Brussels" description="Quisque euismod, dolor a rhoncus placerat, nunc libero ultrices tortor, quis dapibus urna tortor ut nunc. Nunc faucibus ex vel nibh feugiat, ut venenatis nisl sodales."/>
            </Carousel>
        </div>
    );
}

export default Caroussel