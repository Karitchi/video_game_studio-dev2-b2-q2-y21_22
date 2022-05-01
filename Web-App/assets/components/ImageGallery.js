import React from 'react';
import style from './style/ImageGallery.css';
import ImageBlock from "./ImageBlock";

const ImageGallery = (props) => {
    return (
        <div>
            <div className='image-gallery'>
                <ImageBlock />
                <ImageBlock />
                <ImageBlock />
                <ImageBlock />
                <ImageBlock />
                <ImageBlock />
            </div>
        </div>

    )
}
export default ImageGallery