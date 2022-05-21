import React from 'react'
import $, { data } from "jquery";
import GameImage from "./style/GameImage.css"

const Upcoming_Projects = () => {
    return (
        <div className='container'>

            <div className='upcoming_projects'>
                <a href='http://127.0.0.1:8000/games'>
                    <div className='games'>
                        <img src={'https://picsum.photos/300/200'} className='game__img'></img>
                        <div className='game__overlay'>
                            <div className='game__title'>New Game</div>
                            <p className='game__description'>
                                Dis white boy.
                            </p>
                        </div>
                    </div>
                </a>


            </div>



        </div>



    )
}

export default Upcoming_Projects;