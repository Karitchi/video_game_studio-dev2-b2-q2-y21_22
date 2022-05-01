import React from 'react'
import './style/PageFormat.css'
import Carousel_career from '../components/Caroussel'
import Presentation_img from "../components/Presentation_img";
import Presentation_career from "../components/Presentation_career";


function Careers(){
    return (
        <div className='content'>
            <Presentation_img />
            <Presentation_career />
            <Carousel_career />
        </div>
    )
}

export default Careers