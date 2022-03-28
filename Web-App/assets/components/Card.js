import React from "react";
import './style/Card.css'

function Card(props) {
    return(
        <div className='card'>
            <h1>{props.title}</h1>
            <div>Location : {props.location}</div>
            <div>{props.description}</div>
        </div>
    )
}

export default Card