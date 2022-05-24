import React, { useState } from 'react'
import $ from 'jquery'
import AdminGameCategory from "./AdminGameCategory"
import AdminGameImage from "./style/AdminGameImage.css"




const AdminFeaturedGames = (props) => {

    return (

        <div className='container'>
            <div className='featured_games'>

                <div className='game_displayed'>
                    <img src={'https://picsum.photos/300/200'} className='game__img'></img>
                    <div className='game_name'>
                        <h1> Game </h1>
                    </div>
                    <AdminGameCategory cat={"featured"} />
                </div>


                <div className='game_displayed'>
                    <img src={'https://picsum.photos/300/200'} className='game__img'></img>
                    <div className='game_name'>
                        <h1> Other Game </h1>
                    </div>
                    <AdminGameCategory cat={"featured"} />
                </div>


                <div className='game_displayed'>
                    <img src={'https://picsum.photos/300/200'} className='game__img'></img>
                    <div className='game_name'>
                        <h1> Some Game </h1>
                    </div>
                    <AdminGameCategory cat={"featured"} />
                </div>


                <div className='game_displayed'>
                    <img src={'https://picsum.photos/300/200'} className='game__img'></img>
                    <div className='game_name'>
                        <h1> Drifter </h1>
                    </div>
                    <AdminGameCategory cat={"featured"} />
                </div>

                <div className='game_displayed add'>
                    <img src={require('./img/plus.png')} className='game__img'></img>
                </div>



            </div>
        </div>
    )


}

export default AdminFeaturedGames




