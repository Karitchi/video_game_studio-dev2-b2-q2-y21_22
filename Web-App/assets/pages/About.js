import React from 'react'
import style from './style/PageFormat.css'
import Silva_bird from "../components/Silva_bird"
import FeaturedGames from "../components/FeaturedGames";
import Upcoming_Projects from '../components/UpcomingProjects';


const About = () => {
    return (
        <div className='content'>
            <Silva_bird/>
            <big className='static_text'>Some of our featured games:</big>
            <FeaturedGames/>
            <big className='static_text'>Our upcoming projects:</big>
            <Upcoming_Projects/>
            
        </div>
    )
}

export default About
