import React from 'react'
import './style/PageFormat.css'
import Caroussel from '../components/Caroussel'
import Presentation_img from "../components/Presentation_img";
import Presentation_career from "../components/Presentation_career";


const Careers = () => {
    return (
        <div className='content'>
            <Presentation_img />
            <Presentation_career />
            <Caroussel />
        </div>
    )
}

export default Careers