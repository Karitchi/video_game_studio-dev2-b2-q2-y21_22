import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import style from './style/GameBox.css'
import {Link, Route, Router} from "react-router-dom";
import $ from 'jquery';
import {func} from "prop-types";

const GamesContainer = (props) => {
    return (
        <Link className="game-box" to={'/' + props.name +'/' + props.obj.link}>
            <h1>{props.obj.name}</h1>
            <img src={props.obj.coverImg} alt='' className='tttttttt' draggable='false'/>
            <p className="redirect">See game</p>
        </Link>
    )
}
export default GamesContainer