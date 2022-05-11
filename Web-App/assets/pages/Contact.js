import React from 'react';
import style from './style/PageFormat.css';
import Form from "../components/Form";
import Image from "../components/Image";


const Contact = () => {
    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <Image />
            <div className='content'>
                <Form  />

            </div>
        </div>
    )
}

export default Contact

///                {datele.map(( the_data, index ) => {
   /// return <p> {the_data.company_description} </p>
///} )}