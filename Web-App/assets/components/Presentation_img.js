import React from 'react';
import hyper from './img/Hyper_Light_Drifter.jpg'
import './style/Presentation_img.css'

function Presentation_img() {
    return(
        <div className='image_presentation'>
            <img src={hyper} alt="Hyper Light Drifter game" />
        </div>
    )
}

export default Presentation_img