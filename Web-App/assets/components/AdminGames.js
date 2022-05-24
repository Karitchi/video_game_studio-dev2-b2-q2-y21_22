import React, { useState } from 'react'
import $ from 'jquery'
import AdminGameImage from "./style/AdminGameImage.css"
import AdminGameCategory from "./AdminGameCategory"



const AdminGames = (props) => {

    return (

        <div className='container'>
            <div className='featured_games'>

                <div className='game_displayed'>
                    <img src={'https://picsum.photos/300/200'} className='game__img'></img>
                    <div className='game_name'>
                        <h1> Warped </h1>
                    </div>
                    <AdminGameCategory cat={"games"} />
                </div>


                <div className='game_displayed'>
                    <img src={'https://picsum.photos/300/200'} className='game__img'></img>
                    <div className='game_name'>
                        <h1> Other Game </h1>
                    </div>
                    <AdminGameCategory cat={"games"} />
                </div>



                <div className='game_displayed'>
                    <img src={'https://picsum.photos/300/200'} className='game__img'></img>
                    <div className='game_name'>
                        <h1> Drifter </h1>
                    </div>
                    <AdminGameCategory cat={"games"} />
                </div>

                <div className='game_displayed'>
                    
                </div>


            </div>
        </div>
    )


}

export default AdminGames
