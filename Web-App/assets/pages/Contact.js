import React from 'react'
import style from './style/PageFormat.css'
import Form from "../components/Form";
import Image from '../components/Image';

const Contact = () => {
    return (
        <div>
            <Image/>
            <div className='content'>
                <Form />
            </div>
        </div>

    )
}

export default Contact
