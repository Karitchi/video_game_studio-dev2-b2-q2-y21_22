import React from 'react';
import style from './style/SingleImage.css';

/*<SingleImage src='https://picsum.photos/300/200' possition='center' />*/

const SingleImage = (props) => {
    return (
        <img alt='' className={'single-image-block '+ props.possition} src={props.src} draggable='false' />
    )
}


export default SingleImage