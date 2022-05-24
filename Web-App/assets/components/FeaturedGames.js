import React from 'react'
import $, { data } from "jquery"
import GameImage from "./style/GameImage.css"

const Featured_Games = () => {
    return (
        <div className='container'>
            <div className='featured_games'>


                <a href='http://127.0.0.1:8000/games'>
                    <div className='games'>
                        <img src={'https://picsum.photos/300/200'} className='game__img'></img>
                        <div className='game__overlay'>
                            <div className='game__title'>Warped</div>
                            <p className='game__description'>
                                Dis a text.
                            </p>
                        </div>
                    </div>
                </a>


                <a href='http://127.0.0.1:8000/games'>
                    <div className='games'>
                        <img src={'https://picsum.photos/300/200'} className='game__img'></img>
                        <div className='game__overlay'>
                            <div className='game__title'>Drifter</div>
                            <p className='game__description'>
                                Dis another text.
                            </p>
                        </div>
                    </div>
                </a>


                <a href='http://127.0.0.1:8000/games'>
                    <div className='games'>
                        <img src={'https://picsum.photos/300/200'} className='game__img'></img>
                        <div className='game__overlay'>
                            <div className='game__title'>Other Game</div>
                            <p className='game__description'>
                                Dis da last text.
                            </p>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default Featured_Games


var games_treated;

$.ajax({
    async: false,
    url: "http://127.0.0.1:8000/api/games",
    dataType: "json",
    success: function getsJson(data) {
        games_treated = JSON.parse(data);

    }
})


