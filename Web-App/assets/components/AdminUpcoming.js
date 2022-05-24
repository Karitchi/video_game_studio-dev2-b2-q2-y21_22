import React, { useState } from 'react'
import $ from 'jquery'
import AdminGameCategory from "./AdminGameCategory"



const AdminUpcoming = (props) => {

    return (

        <div className='container'>

            <div className='featured_games'>
                <div className='game_displayed'>
                    <img src={'https://picsum.photos/300/200'} className='game__img'></img>
                    <div className='game_name'>
                        <h1> Warped </h1>
                    </div>
                    <AdminGameCategory cat={"upcoming"} />
                </div>




                <div className='game_displayed'>
                    <img src={'https://picsum.photos/300/200'} className='game__img'></img>
                    <div className='game_name'>
                        <h1> Game 2 </h1>
                    </div>
                    <AdminGameCategory cat={"upcoming"} />
                </div>
            </div>

        </div>
    )


}

export default AdminUpcoming
