import React from 'react'
import style from './style/ImageBlock.css'

const ImageBlock = (props) => {
    return (
        <div className='image-block'>
            <img src={'https://picsum.photos/300/200'} alt='' draggable='false'/>
        </div>
    )
}
export default ImageBlock