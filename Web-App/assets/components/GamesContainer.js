import React from 'react'
import ReactDOM from 'react-dom';
import style from './style/GamesContainer.css'
import GameBox from './GameBox'
import {func} from "prop-types";
import $ from 'jquery';

const GamesContainer = (props) => {
    return (
        <div className="games-container-description">
            {contentTitle(props.name)}
            <div className="games-container">
                {props.games.map((i, index) => <GameBox obj={i} name={props.name} key={index} />)}
            </div>
        </div>
    )
}

export default GamesContainer

function contentTitle(name){
    if(name === 'games'){
        return(
            <p className='games-container-title'>Our games:</p>
        )
    }
    else if(name === 'projects'){
        return(
            <p className="games-container-title">Upcoming projects:</p>
        )
    }
}