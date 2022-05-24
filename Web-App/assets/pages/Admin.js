import React, { useState } from 'react'
import style from './style/PageFormat.css'
import Nav from "../components/Nav";
import Featured from "../components/AdminFeaturedGames";
import Games from "../components/AdminGames";
import Upcoming from "../components/AdminUpcoming";

const Admin = () => {
    return (
        <div>
            <div className='adminContainer'>
                <Nav />
                <Games />
                <Featured />
                <Upcoming />
            </div>
        </div>

    )
}

export default Admin
